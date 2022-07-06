import { useEffect, useContext } from 'react';
import { MyContext } from '../context/context';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// });

export function Routing() {
  const map = useMap();

  const { location1LatLng, location2LatLng } = useContext(MyContext);

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      // waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],

      waypoints: [
        L.latLng(location1LatLng.lat, location1LatLng.lng),
        L.latLng(location2LatLng.lat, location2LatLng.lng),
      ],
      addWaypoints: false,
      // routeWhileDragging: true,
      // showAlternatives: true,
    })
      .on('routeselected', function (e) {
        const route = e.route;
        console.log(route.summary);
      })
      .addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, location1LatLng]);

  // return null;
}
