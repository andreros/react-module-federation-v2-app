import type { useGlobalStore } from 'host/stores';
export type TGlobalContext = {
    useGlobalStore?: typeof useGlobalStore;
};
export declare const GlobalContext: import("react").Context<TGlobalContext>;
export type TGlobalContextProvider = {
    /**
     * The component children.
     */
    children: string | (string | React.ReactElement)[] | React.ReactElement | React.ReactElement[];
    /**
     * Global context.
     */
    context: TGlobalContext;
};
export declare const GlobalContextProvider: React.FC<TGlobalContextProvider>;
