import { useEffect, useContext } from 'react';
import { MapContext } from '../context/context';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// });

export function Routing() {
  const map = useMap();

  const {
    location1LatLng,
    location2LatLng,
    currentAdresses,
    setCurrentAdresses,
    travelData,
    setTravelData,
  } = useContext(MapContext);

  async function getDistance(data) {
    // console.log(data);
    setTravelData({
      ...travelData,
      distance: Math.round(data.totalDistance / 1000),
      time: Math.round((data.totalTime / 3600) * 100) / 100, //time is in seconds convert to hours
    });
  }

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(
          currentAdresses.adress1LatLng.lat,
          currentAdresses.adress1LatLng.lng
        ),
        L.latLng(
          currentAdresses.adress2LatLng.lat,
          currentAdresses.adress2LatLng.lng
        ),
      ],
      addWaypoints: false,
      // routeWhileDragging: true,
      showAlternatives: true,
    })
      .on('routeselected', function (e) {
        const route = e.route;
        // console.log(route.summary);
        getDistance(route.summary);
      })
      .addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, currentAdresses]);

  // return null;
}
