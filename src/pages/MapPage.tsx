import { useContext } from 'react';
import { MapContext } from '../context/context';
import { SearchForm } from '../components/searchForm/SearchForm';
import { TravelSummary } from '../components/travelSummary/TravelSummary';
import { Map } from '../components/map/Map';
import { Header } from '../components/header/header.style';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { Arrow } from '../components/navbar/navbar.style';
import { MapContainer } from './mapPage.style';
import { searchFormCheck } from '../logic/formCheck';

export const MapPage = () => {
  const { currentAdresses } = useContext(MapContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  // console.log(searchFormCheck(currentAdresses).allTestsPass());
  return (
    <>
      <Navbar>
        <Arrow onClick={handleClick}>&lt;</Arrow>
        <Header primary>Oblicz Koszt Podróży</Header>
      </Navbar>
      <MapContainer>
        <Map />
        <div>
          <SearchForm map />
          {searchFormCheck(currentAdresses).allTestsPass() && (
            <Header>
              {currentAdresses.adress1}-{currentAdresses.adress2}
            </Header>
          )}
          <TravelSummary />
        </div>
      </MapContainer>
    </>
  );
};
