import fs from 'fs'
import path from 'path'
import { docsUrl } from '@pnpm/cli-utils'
import { FILTERING, OPTIONS, UNIVERSAL_OPTIONS } from '@pnpm/common-cli-options-help'
import { types as allTypes } from '@pnpm/config'
import PnpmError from '@pnpm/error'
import rimraf from '@zkochan/rimraf'
import pick from 'ramda/src/pick'
import renderHelp from 'render-help'
import * as install from './install'
import fsx from 'fs-extra'

export function rcOptionsTypes () {
  return install.rcOptionsTypes()
}

export function cliOptionsTypes () {
  return install.cliOptionsTypes()
}

export const commandNames = ['deploy']

export function help () {
  return renderHelp({
    description: 'Deploy a package from a workspace',
    descriptionLists: [],
    url: docsUrl('deploy'),
    usages: [],
  })
}

export async function handler (
  opts: install.InstallCommandOptions,
  params: string[]
) {
  if (!opts.workspaceDir) {
    throw new PnpmError('CANNOT_DEPLOY', 'A deploy is only possible from inside a workspace')
  }
  const deployedDir = Object.keys(opts.selectedProjectsGraph ?? {})[0]
  const deployDir = path.join(opts.workspaceDir, 'deploy')
  await rimraf(deployDir)
  await fs.promises.mkdir(deployDir)
  await copyProject(deployedDir, deployDir)
  const readPackageHook = opts.hooks?.readPackage
  // eslint-disable-next-line
  const newReadPackageHook = readPackageHook ? (async (pkg: any, context: any) => deployHook(await readPackageHook(pkg, context))) : deployHook
  await install.handler({
    ...opts,
    depth: Infinity,
    hooks: {
      ...opts.hooks,
      readPackage: newReadPackageHook,
    },
    frozenLockfile: false,
    preferFrozenLockfile: false,
    dev: false,
    virtualStoreDir: path.join(deployDir, 'node_modules/.pnpm'),
    modulesDir: path.relative(deployedDir, path.join(deployDir, 'node_modules')),
  })
}

async function copyProject (src: string, dest: string) {
  const files = await fs.promises.readdir(src)
  await Promise.all(files
    .filter((file) => file !== 'node_modules')
    .map(async (file) => fsx.copy(path.join(src, file), path.join(dest, file)))
  )
}

function deployHook (pkg: any) {
  pkg.dependenciesMeta = pkg.dependenciesMeta || {}
  for (const [depName, depVersion] of Object.entries(pkg.dependencies ?? {})) {
    if ((depVersion as string).startsWith('workspace:')) {
      pkg.dependenciesMeta[depName] = {
        injected: true
      }
    }
  }
  return pkg
}
