
    export type RemoteKeys = 'mfe1/mfeApp';
    type PackageType<T> = T extends 'mfe1/mfeApp' ? typeof import('mfe1/mfeApp') :any;