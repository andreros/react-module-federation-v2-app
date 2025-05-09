
    export type RemoteKeys = 'mfe/mfeApp';
    type PackageType<T> = T extends 'mfe/mfeApp' ? typeof import('mfe/mfeApp') :any;