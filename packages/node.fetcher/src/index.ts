import fs from 'fs'
import path from 'path'
import {
  FetchFromRegistry,
  RetryTimeoutOptions,
} from '@pnpm/fetching-types'
import { FilesIndex } from '@pnpm/fetcher-base'
import createCafsStore from '@pnpm/create-cafs-store'
import createFetcher, { waitForFilesIndex } from '@pnpm/tarball-fetcher'
import AdmZip from 'adm-zip'
import renameOverwrite from 'rename-overwrite'
import tempy from 'tempy'
import { getNodeTarball } from './getNodeTarball'

export interface FetchNodeOptions {
  cafsDir: string
  fetchTimeout?: number
  nodeMirrorBaseUrl?: string
  retry?: RetryTimeoutOptions
}

export async function fetchNode (fetch: FetchFromRegistry, version: string, targetDir: string, opts: FetchNodeOptions) {
  const nodeMirrorBaseUrl = opts.nodeMirrorBaseUrl ?? 'https://nodejs.org/download/release/'
  const { tarball, pkgName } = getNodeTarball(version, nodeMirrorBaseUrl, process.platform, process.arch)
  if (tarball.endsWith('.zip')) {
    await downloadAndUnpackZip(fetch, tarball, targetDir, pkgName)
    return
  }
  const getCredentials = () => ({ authHeaderValue: undefined, alwaysAuth: undefined })
  const { tarball: fetchTarball } = createFetcher(fetch, getCredentials, {
    retry: opts.retry,
    timeout: opts.fetchTimeout,
  })
  const cafs = createCafsStore(opts.cafsDir)
  const { filesIndex } = await fetchTarball(cafs, { tarball }, {
    lockfileDir: process.cwd(),
  })
  await cafs.importPackage(targetDir, {
    filesResponse: {
      filesIndex: await waitForFilesIndex(filesIndex as FilesIndex),
      fromStore: false,
    },
    force: true,
  })
}

async function downloadAndUnpackZip (
  fetchFromRegistry: FetchFromRegistry,
  zipUrl: string,
  targetDir: string,
  pkgName: string
) {
  const response = await fetchFromRegistry(zipUrl)
  const tmp = path.join(tempy.directory(), 'pnpm.zip')
  const dest = fs.createWriteStream(tmp)
  await new Promise((resolve, reject) => {
    response.body!.pipe(dest).on('error', reject).on('close', resolve)
  })
  const zip = new AdmZip(tmp)
  const nodeDir = path.dirname(targetDir)
  zip.extractAllTo(nodeDir, true)
  await renameOverwrite(path.join(nodeDir, pkgName), targetDir)
  await fs.promises.unlink(tmp)
}
