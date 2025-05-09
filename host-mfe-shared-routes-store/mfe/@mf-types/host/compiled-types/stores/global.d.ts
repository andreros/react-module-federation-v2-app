export type TStoreSet = <A extends string | {
    type: string;
}>(partial: any, replace?: boolean | undefined, action?: A | undefined) => void;
export type TGlobalState = {
    authenticated: boolean;
    loading: boolean;
};
export type TGlobalStateMutations = {
    setAuthenticated(isAuthenticated: boolean): void;
    setLoading(isLoading: boolean): void;
    resetState(): void;
};
export declare const mutations: (set: TStoreSet) => TGlobalStateMutations;
export type TGlobalStore = TGlobalState & TGlobalStateMutations;
export declare const useGlobalStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<TGlobalStore>, "setState"> & {
    setState(partial: TGlobalStore | Partial<TGlobalStore> | ((state: TGlobalStore) => TGlobalStore | Partial<TGlobalStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: TGlobalStore | ((state: TGlobalStore) => TGlobalStore), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<TGlobalStore, {
            setAuthenticated(isAuthenticated: boolean): void;
            setLoading(isLoading: boolean): void;
            resetState(): void;
            authenticated: boolean;
            loading: boolean;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: TGlobalStore) => void) => () => void;
        onFinishHydration: (fn: (state: TGlobalStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<TGlobalStore, {
            setAuthenticated(isAuthenticated: boolean): void;
            setLoading(isLoading: boolean): void;
            resetState(): void;
            authenticated: boolean;
            loading: boolean;
        }>>;
    };
}>;
