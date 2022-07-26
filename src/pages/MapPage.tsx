import { SearchForm } from '../components/searchForm/SearchForm';
import { TravelSummary } from '../components/travelSummary/TravelSummary';
import { Map } from '../components/map/Map';
import { Header } from '../components/header/Header';
import { useNavigate } from 'react-router-dom';

export const MapPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <a onClick={handleClick}>Strona Główna</a>
      <Header />
      <SearchForm />
      <Map />
      <TravelSummary />
    </>
  );
};
