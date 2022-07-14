import { MapDataProvider } from './context/MapDataProvider';

import { SearchForm } from './components/searchForm/SearchForm';
import { TravelSummary } from './components/travelSummary/TravelSummary';
import { Map } from './components/map/Map';
import { Header } from './components/header/Header';

import './App.css';

export const App: React.FC = () => {
  return (
    <MapDataProvider>
      <Header />
      <SearchForm />
      <Map />
      <TravelSummary />
    </MapDataProvider>
  );
};
