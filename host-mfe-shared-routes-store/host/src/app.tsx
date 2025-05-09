import { BrowserRouter } from 'react-router-dom';

import { Router } from '@/routers/router';
import { useGlobalStore } from '@/stores/global';

import './app.css';

const App = () => {
  const authenticated = useGlobalStore(store => store.authenticated);
  const loading = useGlobalStore(store => store.loading);

  return (
    <div className='content'>
      <h1>Module Federation Host</h1>
      <div>
        <h2>Shared state variables</h2>
        <p>Authenticated: {String(authenticated)}</p>
        <p>Loading: {String(loading)}</p>
      </div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
