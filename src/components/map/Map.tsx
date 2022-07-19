import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContext } from '../../context/context';
// import { getLocationParams } from './logic/getLocationParams';

import { Routing } from '../Routing';

// import { SearchForm } from './components/searchForm/SearchForm';
// import { TravelSummary } from './components/travelSummary/TravelSummary';

export const Map: React.FC = () => {
  const { currentAdresses } = useContext(MapContext);

  // console.log(
  //   (currentAdresses.adress1.length && currentAdresses.adress2.length) > 0
  // );
  const routingDataExist =
    (currentAdresses.adress1.length && currentAdresses.adress2.length) > 0;

  return (
    <MapContainer
      center={
        routingDataExist
          ? currentAdresses.adress1LatLng
          : { lat: 52.2356, lng: 21.01037 }
      }
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {routingDataExist && <Routing />}
    </MapContainer>
  );
};
