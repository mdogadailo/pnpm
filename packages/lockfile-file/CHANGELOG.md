# @pnpm/lockfile-file

## 5.1.2

### Patch Changes

- Updated dependencies [d01c32355]
- Updated dependencies [8e5b77ef6]
- Updated dependencies [8e5b77ef6]
  - @pnpm/lockfile-types@4.2.0
  - @pnpm/types@8.4.0
  - @pnpm/merge-lockfile-changes@3.0.5

## 5.1.1

### Patch Changes

- Updated dependencies [2a34b21ce]
  - @pnpm/types@8.3.0
  - @pnpm/lockfile-types@4.1.0
  - @pnpm/merge-lockfile-changes@3.0.4

## 5.1.0

### Minor Changes

- 56cf04cb3: New settings added: use-git-branch-lockfile, merge-git-branch-lockfiles, merge-git-branch-lockfiles-branch-pattern.

### Patch Changes

- Updated dependencies [fb5bbfd7a]
- Updated dependencies [56cf04cb3]
  - @pnpm/types@8.2.0
  - @pnpm/git-utils@0.1.0
  - @pnpm/lockfile-types@4.0.3
  - @pnpm/merge-lockfile-changes@3.0.3

## 5.0.4

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0
  - @pnpm/lockfile-types@4.0.2
  - @pnpm/merge-lockfile-changes@3.0.2

## 5.0.3

### Patch Changes

- 52b0576af: feat: support libc filed

## 5.0.2

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/lockfile-types@4.0.1
  - @pnpm/merge-lockfile-changes@3.0.1

## 5.0.1

### Patch Changes

- Updated dependencies [1267e4eff]
  - @pnpm/constants@6.1.0
  - @pnpm/error@3.0.1

## 5.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0
  - @pnpm/constants@6.0.0
  - @pnpm/error@3.0.0
  - @pnpm/lockfile-types@4.0.0
  - @pnpm/merge-lockfile-changes@3.0.0

## 4.3.1

### Patch Changes

- Updated dependencies [70ba51da9]
  - @pnpm/error@2.1.0

## 4.3.0

### Minor Changes

- b138d048c: New optional field supported: `onlyBuiltDependencies`.

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/lockfile-types@3.2.0
  - @pnpm/types@7.10.0
  - @pnpm/merge-lockfile-changes@2.0.8

## 4.2.6

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0
  - @pnpm/lockfile-types@3.1.5
  - @pnpm/merge-lockfile-changes@2.0.7

## 4.2.5

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/lockfile-types@3.1.4
  - @pnpm/merge-lockfile-changes@2.0.6

## 4.2.4

### Patch Changes

- eb9ebd0f3: In a dedicated lockfile the `dependenciesMeta` field should be nested to `'.'` during normalization.
- eb9ebd0f3: The `dependenciesMeta` field should be sorted after the dependencies fields.

## 4.2.3

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/lockfile-types@3.1.3
  - @pnpm/merge-lockfile-changes@2.0.5

## 4.2.2

### Patch Changes

- Updated dependencies [ba9b2eba1]
  - @pnpm/types@7.7.0
  - @pnpm/lockfile-types@3.1.2
  - @pnpm/merge-lockfile-changes@2.0.4

## 4.2.1

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0
  - @pnpm/lockfile-types@3.1.1
  - @pnpm/merge-lockfile-changes@2.0.3

## 4.2.0

### Minor Changes

- 4ab87844a: New optional property added to project snapshots: `dependenciesMeta`.

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/lockfile-types@3.1.0
  - @pnpm/merge-lockfile-changes@2.0.2

## 4.1.1

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0

## 4.1.0

### Minor Changes

- 8e76690f4: New optional field added to the lockfile: `packageExtensionsChecksum`.

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0

## 4.0.4

### Patch Changes

- 2dc5a7a4c: Values of properties in the engines field should be written to single line.

## 4.0.3

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0

## 4.0.2

### Patch Changes

- a1a03d145: Import only the required functions from ramda.
- Updated dependencies [a1a03d145]
  - @pnpm/merge-lockfile-changes@2.0.1

## 4.0.1

### Patch Changes

- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0

## 4.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Minor Changes

- 155e70597: The "resolution" field should always be the first key. This will reduce the number of issues during lockfile merges.
- f7750baed: Add blank lines to the lockfile between items.

  The `resolution` object should be written in a single line.

### Patch Changes

- 9c2a878c3: Change order of keys in package snapshot.
- 8b66f26dc: Do not fail when `lockfileVersion` is a string.
- 9c2a878c3: Write engines, os, and cpu to single line.
- Updated dependencies [6871d74b2]
- Updated dependencies [97b986fbc]
- Updated dependencies [6871d74b2]
- Updated dependencies [f2bb5cbeb]
  - @pnpm/constants@5.0.0
  - @pnpm/error@2.0.0
  - @pnpm/lockfile-types@3.0.0
  - @pnpm/merge-lockfile-changes@2.0.0
  - @pnpm/types@7.0.0

## 3.2.1

### Patch Changes

- 51e1456dd: Throw a standard pnpm error object on broken lockfile error. The error code is `ERR_PNPM_BROKEN_LOCKFILE`.

## 3.2.0

### Minor Changes

- 9ad8c27bf: Add optional neverBuiltDependencies property to the lockfile object.

### Patch Changes

- Updated dependencies [9ad8c27bf]
- Updated dependencies [9ad8c27bf]
  - @pnpm/lockfile-types@2.2.0
  - @pnpm/types@6.4.0
  - @pnpm/merge-lockfile-changes@1.0.1

## 3.1.4

### Patch Changes

- af897c324: An empty overrides field should be removed from the lockfile before saving.

## 3.1.3

### Patch Changes

- 1e4a3a17a: Update js-yaml to version 4.

## 3.1.2

### Patch Changes

- fba715512: writeLockfiles should return Promise<void>.

## 3.1.1

### Patch Changes

- Updated dependencies [0c5f1bcc9]
  - @pnpm/error@1.4.0

## 3.1.0

### Minor Changes

- 3776b5a52: New function added that reads the lockfile and autofixes any merge conflicts.

### Patch Changes

- Updated dependencies [3776b5a52]
  - @pnpm/merge-lockfile-changes@1.0.0

## 3.0.18

### Patch Changes

- dbcc6c96f: Print a better error message when stringifying a lockfile object fails.
- 09492b7b4: Update write-file-atomic to v3.

## 3.0.17

### Patch Changes

- aa6bc4f95: Print a better when stringifying a lockfile object fails.

## 3.0.16

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/lockfile-types@2.1.1
  - @pnpm/types@6.3.1

## 3.0.15

### Patch Changes

- Updated dependencies [d54043ee4]
- Updated dependencies [d54043ee4]
- Updated dependencies [fcdad632f]
  - @pnpm/lockfile-types@2.1.0
  - @pnpm/types@6.3.0
  - @pnpm/constants@4.1.0

## 3.0.14

### Patch Changes

- Updated dependencies [75a36deba]
  - @pnpm/error@1.3.1

## 3.0.13

### Patch Changes

- 9550b0505: Remove the `packages` field before saving, if it equals `undefined`.

## 3.0.12

### Patch Changes

- Updated dependencies [6d480dd7a]
  - @pnpm/error@1.3.0

## 3.0.11

### Patch Changes

- Updated dependencies [db17f6f7b]
  - @pnpm/types@6.2.0

## 3.0.10

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0

## 3.0.9

### Patch Changes

- Updated dependencies [b5f66c0f2]
- Updated dependencies [ca9f50844]
- Updated dependencies [da091c711]
- Updated dependencies [6a8a97eee]
- Updated dependencies [4f5801b1c]
  - @pnpm/constants@4.0.0
  - @pnpm/types@6.0.0
  - @pnpm/lockfile-types@2.0.1
  - @pnpm/error@1.2.1

## 3.0.9-alpha.2

### Patch Changes

- Updated dependencies [ca9f50844]
- Updated dependencies [6a8a97eee]
  - @pnpm/constants@4.0.0-alpha.1
  - @pnpm/lockfile-types@2.0.1-alpha.0

## 3.0.9-alpha.1

### Patch Changes

- Updated dependencies [da091c71]
  - @pnpm/types@6.0.0-alpha.0

## 3.0.9-alpha.0

### Patch Changes

- Updated dependencies [b5f66c0f2]
  - @pnpm/constants@4.0.0-alpha.0

## 3.0.8

### Patch Changes

- 907c63a48: Dependencies updated.
- 907c63a48: Dependencies updated.
- 907c63a48: Use `fs.mkdir` instead of `make-dir`.
