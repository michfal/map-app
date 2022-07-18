import { MapDataProvider } from './context/MapDataProvider';

import { MapPage } from './pages/MapPage';

import './App.css';

export const App: React.FC = () => {
  return (
    <MapDataProvider>
      {/* <Header />
      <SearchForm />
      <Map />
      <TravelSummary /> */}
      <MapPage />
    </MapDataProvider>
  );
};
