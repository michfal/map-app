import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';

import { SearchForm } from './components/searchForm/SearchForm';
import { MyContext } from './context/context';
import { getLocationParams } from './logic/getLocationParams';

import './App.css';

function ShowPosition({ position }) {
  const map = useMap();

  map.panTo(Object.values(position));
  return null;
}

function App() {
  const [location1Data, setLocation1] = useState({ lat: 61.505, lng: 7.19 });
  const [location2Data, setLocation2] = useState({ lat: 70.505, lng: 9 });

  const [adress1, setAdress1] = useState({
    number: '15',
    streetName: 'Podborska',
    city: 'Warszawa',
    country: 'Polska',
  });

  const [adress2, setAdress2] = useState({
    number: '15',
    streetName: 'Lipińskiego',
    city: 'Sanok',
    country: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const location1 = await getLocationParams(adress1);
    const location2 = await getLocationParams(adress2);
    console.log(location1);
    setLocation1(location1);
    setLocation2(location2);
  }

  return (
    <MyContext.Provider
      value={{
        adress1,
        setAdress1,
        adress2,
        setAdress2,
        handleSubmit,
      }}>
      <div className='App'>
        <SearchForm />
        <MapContainer center={location1Data} zoom={13} scrollWheelZoom={true}>
          <ShowPosition position={location1Data} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={location1Data}></Marker>
          <Marker position={location2Data}></Marker>
        </MapContainer>
      </div>
    </MyContext.Provider>
  );
}

export default App;
