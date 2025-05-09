import type React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MfeApp from 'mfe/mfeApp';

import { useGlobalStore } from '@/stores/global';

export const Router: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path='/mfe/*'
        element={
          <div className='mfe-container'>
            <MfeApp useGlobalStore={useGlobalStore} />
          </div>
        }
      />
      <Route
        path='*'
        element={
          <div>
            <button onClick={() => navigate('mfe')}>Go to "MfeApp"</button>
          </div>
        }
      />
    </Routes>
  );
};
