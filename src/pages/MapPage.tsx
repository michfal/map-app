import { SearchForm } from '../components/searchForm/SearchForm';
import { TravelSummary } from '../components/travelSummary/TravelSummary';
import { Map } from '../components/map/Map';
import { Header } from '../components/header/Header';

export const MapPage = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <Map />
      <TravelSummary />
    </>
  );
};
