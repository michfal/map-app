import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContext } from './context/context';
import { getLocationParams } from './logic/getLocationParams';

import { Routing } from './components/Routing';

import { SearchForm } from './components/searchForm/SearchForm';
import { TravelSummary } from './components/travelCost/TravelSummary';

import './App.css';

function App() {
  const [travelData, setTravelData] = useState({
    distance: 0,
    time: 0,
  });

  const [currentAdresses, setCurrentAdresses] = useState({
    adress1: '15 Podborska Warszawa',
    adress1LatLng: { lat: 52.19157, lng: 20.95611 },
    adress2: '11 Lipińskiego Sanok',
    adress2LatLng: { lat: 49.55336, lng: 22.20927 },
  });

  useEffect(() => {
    console.log(travelData);
  }, [travelData]);

  async function handleSubmit(e) {
    e.preventDefault();
    const location1params = await getLocationParams(currentAdresses.adress1);
    const location2params = await getLocationParams(currentAdresses.adress2);
    setCurrentAdresses({
      ...currentAdresses,
      adress1LatLng: location1params,
      adress2LatLng: location2params,
    });
  }

  return (
    <MapContext.Provider
      value={{
        handleSubmit,
        currentAdresses,
        setCurrentAdresses,
        travelData,
        setTravelData,
      }}>
      <div className='App'>
        <SearchForm />
        <h1>Oblicz koszt podróży</h1>
        <MapContainer
          center={currentAdresses.adress1LatLng}
          zoom={13}
          scrollWheelZoom={true}>
          {/* <ShowPosition position={location1LatLng} /> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* <Marker position={location1LatLng}></Marker>
          <Marker position={location2LatLng}></Marker> */}
          <Routing />
        </MapContainer>
        <TravelSummary travelData={travelData} />
      </div>
    </MapContext.Provider>
  );
}

export default App;
