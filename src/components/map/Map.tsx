import { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContext } from '../../context/context';

import { Routing } from '../Routing';

export const Map: React.FC = () => {
  const { currentAdresses } = useContext(MapContext);

  const routingDataExist =
    (currentAdresses.adress1.length && currentAdresses.adress2.length) > 0;

  return (
    <>
      {routingDataExist ? (
        <MapContainer
          center={currentAdresses.adress1LatLng}
          zoom={13}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {routingDataExist && <Routing />}
        </MapContainer>
      ) : (
        <div className='leaflet-container leaflet-fade-anim'></div>
      )}
    </>
  );
};
