import { MapDataProvider } from './context/MapDataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MapPage } from './pages/MapPage';
import { IntroPage } from './pages/IntroPage';

import './App.css';

export const App: React.FC = () => {
  return (
    <MapDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </MapDataProvider>
  );
};
