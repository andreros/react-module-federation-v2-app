import type React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DetailsPage } from '@/pages/detailsPage';
import { HomePage } from '@/pages/homePage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/details' element={<DetailsPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
