import { useState, useRef, useEffect } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import * as ttapi from '@tomtom-international/web-sdk-services';

import { SearchForm } from './components/searchForm/SearchForm';
import { MapContext } from './context/context';

import './App.css';
import { element } from 'prop-types';

const MAX_ZOOM = 17;

function App() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-0.112869);
  const [mapLatitude, setMapLatitude] = useState(51.504);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  function convertToPoints(lngLat) {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  }

  function drawRoute(geoJson, map) {
    if (map.getLayer('route')) {
      map.removelayer('route');
      map.removeSource('route');
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geoJson',
        data: geoJson,
      },
      paint: {
        'line-color': 'red',
        'line-width': 6,
      },
    });
  }

  function addDeliveryMarker(lngLat, map) {
    const element = document.createElement('div');
    element.className = 'marker-delivery';
    new tt.Marker({
      element: element,
    })
      .setLngLat(lngLat)
      .addTo(map);
  }

  useEffect(() => {
    const origin = {
      lng: mapLongitude,
      lat: mapLatitude,
    };

    const destinations = [];

    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);

    function addMarker() {
      const element = document.createElement('div');
      element.className = 'marker';
      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([mapLongitude, mapLatitude])
        .addTo(map);
    }

    addMarker();

    function sortDestinations(locations) {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination);
      });
      const callParameters = {
        key: process.env.REACT_APP_TOMTOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      };
      return new Promise((resolve, reject) => {
        ttapi.services
          .matrixRouting(callParameters)
          .then((matrixAPIResults) => {
            const results = matrixAPIResults.matrix[0];
            const resultsArray = results.map((result, index) => {
              return {
                location: locations[index],
                drivingtime: result.response.routeSummary.travelTimeInSeconds,
              };
            });
            resultsArray.sort((a, b) => {
              return a.drivingtime - b.drivingtime;
            });
            const sortedLocations = resultsArray.map((result) => {
              return result.location;
            });
            resolve(sortedLocations);
          });
      });
    }

    const recalculateRoutes = () => {
      //sorted is an array containing location parameters
      const destinations = [
        { lng: -0.112869, lat: 51.504 },
        { lng: -0.1051699875042118, lat: 51.49894026096271 },
      ];
      // sortDestinations(destinations).then((sorted) => {
      //   sorted.unshift(origin);
      //   console.log(sorted);

      //   ttapi.services.calculateRoute({
      //     key: process.env.REACT_APP_TOM_TOM_API_KEY,
      //     locations: sorted,
      //   });
      //   .then((routeData) => {
      //     const geoJson = routeData.toGeoJson();
      //     drawRoute(geoJson, map);
      //   });
      // });

      ttapi.services.calculateRoute({
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        locations: destinations,
      });
    };

    map.on('click', (e) => {
      destinations.push(e.lngLat);
      addDeliveryMarker(e.lngLat, map);
      recalculateRoutes();
    });

    return () => map.remove();
  }, [mapLongitude, mapLatitude]);

  return (
    <MapContext.Provider
      value={{
        placehold: '',
        // adress1,
        // setAdress1,
        // adress2,
        // setAdress2,
        // handleSubmit,
      }}>
      <div className='App'>
        <div ref={mapElement} className='mapDiv' />
        <div className='search_bar'>
          <h1>Where to?</h1>
          <input
            type='text'
            id='longitude'
            className='longitude'
            placeholder='Put in Longitude'
            onChange={(e) => {
              setMapLongitude(e.target.value);
            }}
          />
          <input />
        </div>
      </div>
    </MapContext.Provider>
  );
}

export default App;
