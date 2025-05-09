import { produce } from 'immer';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/*----------------------------------------------------------------------------*/
/* Global # State
/*----------------------------------------------------------------------------*/
export type TStoreSet = <A extends string | { type: string }>(partial: any, replace?: boolean | undefined, action?: A | undefined) => void;

export type TGlobalState = {
  authenticated: boolean;
  loading: boolean;
};

const initialState: TGlobalState = {
  authenticated: false,
  loading: false
};

/*----------------------------------------------------------------------------*/
/* Global # Mutations
/*----------------------------------------------------------------------------*/
export type TGlobalStateMutations = {
  setAuthenticated(isAuthenticated: boolean): void;
  setLoading(isLoading: boolean): void;
  resetState(): void;
};

export const mutations = (set: TStoreSet): TGlobalStateMutations => {
  const setAuthenticated = (isAuthenticated: boolean) => {
    set(
      produce((state: TGlobalState) => {
        state.authenticated = isAuthenticated;
      })
    );
  };

  const setLoading = (isLoading: boolean) => {
    set(
      produce((state: TGlobalState) => {
        state.loading = isLoading;
      })
    );
  };

  const resetState = () => {
    set(
      produce((state: TGlobalState) => {
        state.authenticated = false;
        state.loading = false;
      })
    );
  };

  return {
    setAuthenticated,
    setLoading,
    resetState
  };
};

/*----------------------------------------------------------------------------*/
/* Global # Store
/*----------------------------------------------------------------------------*/
export type TGlobalStore = TGlobalState & TGlobalStateMutations;

export const useGlobalStore = create<TGlobalStore>()(
  devtools(
    persist(
      (set: any) => ({
        ...initialState,
        ...mutations(set)
      }),
      {
        name: 'poc-mf-v2-hb-global-store'
      }
    ),
    {
      anonymousActionType: 'global',
      enabled: true,
      store: 'poc-mf-v2-hb'
    }
  )
);
