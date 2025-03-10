declare module '@pnpm/tabtab' {
  const anything: any;
  export = anything;
}

declare module 'hyperdrive-schemas' {
  const anything: any;
  export = anything;
}

declare module '@zeit/fetch-retry' {
  const anything: any;
  export = anything;
}

declare module 'fuse-native' {
  const anything: any;
  export = anything;
}

declare module '@zkochan/libnpx/index' {
  const anything: any;
  export = anything;
}

declare module '@pnpm/npm-conf' {
  const anything: any;
  export = anything;
}

declare module '@pnpm/npm-conf/lib/types' {
  const anything: any;
  export = anything;
}

declare module '@pnpm/npm-lifecycle' {
  const anything: any;
  export = anything;
}

declare module '@zkochan/npm-package-arg' {
  const anything: any;
  export = anything;
}

declare module '@zkochan/which' {
  const anything: any;
  export = anything;
}

declare module 'anonymous-npm-registry-client' {
  const anything: any;
  export = anything;
}

declare module 'ansi-diff' {
  const anything: any;
  export = anything;
}

declare module 'better-path-resolve' {
  const anything: any;
  export = anything;
}

declare module '@zkochan/diable' {
  const anything: any;
  export = anything;
}

declare module 'dint' {
  const anything: any;
  export = anything;
}

declare module 'exists-link' {
  const anything: any;
  export = anything;
}

declare module 'fs-vacuum' {
  const anything: any;
  export = anything;
}

declare module 'graceful-git' {
  const anything: any;
  export = anything;
}

declare module '@pnpm/graph-sequencer' {
  namespace graphSequencer {
    type Graph<T> = Map<T, T[]>;
    type Groups<T> = Array<T[]>;

    interface Options<T> {
      graph: Graph<T>;
      groups: Groups<T>;
    }

    interface Result<T> {
      safe: boolean;
      chunks: Groups<T>;
      cycles: Groups<T>;
    }

    type GraphSequencer = <T>(opts: Options<T>) => Result<T>;
  }

  const graphSequencer: graphSequencer.GraphSequencer;
  export = graphSequencer;
}

declare module 'is-inner-link' {
  const anything: any;
  export = anything;
}

declare module 'is-port-reachable' {
  const anything: any;
  export = anything;
}

declare module 'node-fetch-unix' {
  const anything: any;
  export = anything;
}

declare module 'process-exists' {
  const anything: any;
  export = anything;
}

declare module 'read-package-json' {
  const anything: any;
  export = anything;
}

declare module 'remove-all-except-outer-links' {
  const anything: any;
  export = anything;
}

declare module 'socks-proxy-agent' {
  const anything: any;
  export = anything;
}

declare module 'stacktracey' {
  const anything: any;
  export = anything;
}

declare module 'yaml-tag' {
  const anything: any;
  export = anything;
}

declare module 'decompress-maybe' {
  const anything: any;
  export = anything;
}

declare module 'stream-cache' {
  const anything: any;
  export = anything;
}

declare module 'mdast-util-to-string' {
  const anything: any;
  export = anything;
}

declare module 'patch-package/dist/applyPatches' {
  export function applyPatch(opts: any): void;
}
