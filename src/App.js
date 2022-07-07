import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Routing } from './components/Routing';

import { SearchForm } from './components/searchForm/SearchForm';
import { MyContext } from './context/context';
import { getLocationParams } from './logic/getLocationParams';

import './App.css';

function App() {
  const [location1LatLng, setLocation1LatLng] = useState({
    lat: 61.505,
    lng: 7.19,
  });
  const [location2LatLng, setLocation2LatLng] = useState({
    lat: 70.505,
    lng: 9,
  });

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
    setLocation1LatLng(location1);
    setLocation2LatLng(location2);
  }

  return (
    <MyContext.Provider
      value={{
        adress1,
        setAdress1,
        adress2,
        setAdress2,
        handleSubmit,
        location1LatLng,
        location2LatLng,
      }}>
      <div className='App'>
        <SearchForm />
        <MapContainer center={location1LatLng} zoom={13} scrollWheelZoom={true}>
          {/* <ShowPosition position={location1LatLng} /> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* <Marker position={location1LatLng}></Marker>
          <Marker position={location2LatLng}></Marker> */}
          <Routing />
        </MapContainer>
      </div>
    </MyContext.Provider>
  );
}

export default App;
