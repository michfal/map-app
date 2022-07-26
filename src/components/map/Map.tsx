import { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContext } from '../../context/context';

import { Routing } from '../Routing';

export const Map: React.FC = () => {
  const { currentAdresses } = useContext(MapContext);

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
