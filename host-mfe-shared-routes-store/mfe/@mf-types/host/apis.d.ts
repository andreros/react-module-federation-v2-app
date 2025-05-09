
    export type RemoteKeys = 'host/stores';
    type PackageType<T> = T extends 'host/stores' ? typeof import('host/stores') :any;