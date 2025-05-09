import { createContext } from 'react';

import type { useGlobalStore } from 'host/stores';

export type TGlobalContext = {
  useGlobalStore?: typeof useGlobalStore;
};

export const GlobalContext = createContext<TGlobalContext>({
  useGlobalStore: undefined
});

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

export const GlobalContextProvider: React.FC<TGlobalContextProvider> = ({ children, context }) => {
  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
