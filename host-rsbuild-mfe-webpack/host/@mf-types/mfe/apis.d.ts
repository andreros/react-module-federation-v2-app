
    export type RemoteKeys = 'mfe/app';
    type PackageType<T> = T extends 'mfe/app' ? typeof import('mfe/app') :any;