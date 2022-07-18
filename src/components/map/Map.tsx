import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContext } from '../../context/context';
// import { getLocationParams } from './logic/getLocationParams';

import { Routing } from '../Routing';

// import { SearchForm } from './components/searchForm/SearchForm';
// import { TravelSummary } from './components/travelSummary/TravelSummary';

export const Map: React.FC = () => {
  const { currentAdresses } = useContext(MapContext);
  return (
    <MapContainer
      center={currentAdresses.adress1LatLng}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Routing />
    </MapContainer>
  );
};
