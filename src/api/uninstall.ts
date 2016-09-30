import cbRimraf = require('rimraf')
import path = require('path')

import initCmd, {CommandNamespace} from './initCmd'
import getSaveType from '../getSaveType'
import removeDeps from '../removeDeps'
import binify from '../binify'
import extendOptions from './extendOptions'
import requireJson from '../fs/requireJson'
import {PnpmOptions, StrictPnpmOptions, Package} from '../types'
import {StoreJson} from '../fs/storeJsonController'
import lock from './lock'

export default async function uninstallCmd (pkgsToUninstall: string[], maybeOpts?: PnpmOptions) {
  const opts = extendOptions(maybeOpts)

  const cmd: CommandNamespace = await initCmd(opts)

  if (!cmd.pkg) {
    throw new Error('No package.json found - cannot uninstall')
  }

  const pkg = cmd.pkg
  return lock(cmd.store, () => uninstallInContext(pkgsToUninstall, pkg, cmd, opts))
}

export async function uninstallInContext (pkgsToUninstall: string[], pkg: Package, cmd: CommandNamespace, opts: StrictPnpmOptions) {
  pkg.dependencies = pkg.dependencies || {}

  // this is OK. The store might not have records for the package
  // maybe it was cloned, `pnpm install` was not executed
  // and remove is done on a package with no dependencies installed
  cmd.storeJson.dependencies[cmd.root] = cmd.storeJson.dependencies[cmd.root] || {}

  const pkgIds = <string[]>pkgsToUninstall
    .map(dep => cmd.storeJson.dependencies[cmd.root][dep])
    .filter(pkgId => !!pkgId)
  const uninstalledPkgs = tryUninstall(pkgIds.slice(), cmd.storeJson, cmd.root)
  uninstalledPkgs.forEach(uninstalledPkg => removeBins(uninstalledPkg, cmd.store, cmd.root))
  if (cmd.storeJson.dependencies[cmd.root]) {
    pkgsToUninstall.forEach(dep => {
      delete cmd.storeJson.dependencies[cmd.root][dep]
    })
    if (!Object.keys(cmd.storeJson.dependencies[cmd.root]).length) {
      delete cmd.storeJson.dependencies[cmd.root]
    }
  }
  await Promise.all(uninstalledPkgs.map(pkgId => removePkgFromStore(pkgId, cmd.store)))

  cmd.storeJsonCtrl.save(cmd.storeJson)
  await Promise.all(pkgsToUninstall.map(dep => rimraf(path.join(cmd.root, 'node_modules', dep))))

  const saveType = getSaveType(opts)
  if (saveType) {
    const pkgJsonPath = path.join(cmd.root, 'package.json')
    await removeDeps(pkgJsonPath, pkgsToUninstall, saveType)
  }
}

function canBeUninstalled (pkgId: string, storeJson: StoreJson, pkgPath: string) {
  return !storeJson.dependents[pkgId] || !storeJson.dependents[pkgId].length ||
    storeJson.dependents[pkgId].length === 1 && storeJson.dependents[pkgId].indexOf(pkgPath) !== -1
}

function tryUninstall (pkgIds: string[], storeJson: StoreJson, pkgPath: string) {
  const uninstalledPkgs: string[] = []
  let numberOfUninstalls: number
  do {
    numberOfUninstalls = 0
    for (let i = 0; i < pkgIds.length; ) {
      if (canBeUninstalled(pkgIds[i], storeJson, pkgPath)) {
        const uninstalledPkg = pkgIds.splice(i, 1)[0]
        uninstalledPkgs.push(uninstalledPkg)
        const deps = storeJson.dependencies[uninstalledPkg] || {}
        const depIds = Object.keys(deps).map(depName => deps[depName])
        delete storeJson.dependencies[uninstalledPkg]
        delete storeJson.dependents[uninstalledPkg]
        depIds.forEach((dep: string) => removeDependency(dep, uninstalledPkg, storeJson))
        Array.prototype.push.apply(uninstalledPkgs, tryUninstall(depIds, storeJson, pkgPath))
        numberOfUninstalls++
        continue
      }
      i++
    }
  } while (numberOfUninstalls)
  return uninstalledPkgs
}

function removeDependency (dependentPkgName: string, uninstalledPkg: string, storeJson: StoreJson) {
  if (!storeJson.dependents[dependentPkgName]) return
  storeJson.dependents[dependentPkgName].splice(storeJson.dependents[dependentPkgName].indexOf(uninstalledPkg), 1)
  if (!storeJson.dependents[dependentPkgName].length) {
    delete storeJson.dependents[dependentPkgName]
  }
}

function removeBins (uninstalledPkg: string, store: string, root: string) {
  const uninstalledPkgJson = requireJson(path.join(store, uninstalledPkg, '_/package.json'))
  const bins = binify(uninstalledPkgJson)
  Object.keys(bins).forEach(bin => cbRimraf.sync(path.join(root, 'node_modules/.bin', bin)))
}

function removePkgFromStore (pkgId: string, store: string) {
  return rimraf(path.join(store, pkgId))
}

function rimraf (filePath: string) {
  return new Promise((resolve, reject) => {
    cbRimraf(filePath, (err: Error) => err ? reject(err) : resolve())
  })
}
