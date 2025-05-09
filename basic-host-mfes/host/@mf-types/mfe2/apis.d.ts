
    export type RemoteKeys = 'mfe2/mfeApp';
    type PackageType<T> = T extends 'mfe2/mfeApp' ? typeof import('mfe2/mfeApp') :any;