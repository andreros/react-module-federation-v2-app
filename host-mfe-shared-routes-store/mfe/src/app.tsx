import './app.css';

import { Router } from '@/routers/router';
import type { useGlobalStore } from 'host/stores';
import { GlobalContextProvider } from './context/global';

export type TAppProps = {
  useGlobalStore?: typeof useGlobalStore;
};

const App: React.FC<TAppProps> = ({ useGlobalStore }) => {
  return (
    <GlobalContextProvider
      context={{
        useGlobalStore
      }}
    >
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
