import { useState, ReactNode, useEffect } from 'react';
import { MapContext } from './context';
import { objectCompare } from '../logic/objectCompare';
import { getLocationsData } from '../logic/getLocationParams';

export const MapDataProvider = ({ children }: { children: ReactNode }) => {
  interface ITravelData {
    distance: number;
    time: number;
  }

  const [travelData, setTravelData] = useState<ITravelData>({
    distance: 0,
    time: 0,
  });

  const baseAdresses = {
    adress1: '',
    adress1LatLng: { lat: 52.2356, lng: 21.01037 },
    adress2: '',
    adress2LatLng: { lat: 51.77234, lng: 19.47502 },
  };

  const [currentAdresses, setCurrentAdresses] =
    useState<IAdressFormat>(baseAdresses);

  //search history
  const [searchHistory, setSearchHistory] = useState<Array<IAdressFormat>>([]);

  const handleSearchHistory = async (adress: IAdressFormat) => {
    if (typeof searchHistory[0] == 'object') {
      if (!objectCompare(searchHistory[0], adress)) {
        setSearchHistory((searchHistory: Array<IAdressFormat>) => [
          adress,
          ...searchHistory,
        ]);
      }
    }
    !searchHistory[0] &&
      setSearchHistory((searchHistory: Array<IAdressFormat>) => [
        adress,
        ...searchHistory,
      ]);
  };

  //handle location search
  const handleLocationSearch = () => {
    getLocationsData(currentAdresses.adress1, currentAdresses.adress2).then(
      (data: any) => {
        // console.log(data);
        setCurrentAdresses(data);
        handleSearchHistory(data);
      }
    );
  };

  return (
    <MapContext.Provider
      value={{
        baseAdresses,
        handleLocationSearch,
        currentAdresses,
        setCurrentAdresses,
        travelData,
        setTravelData,
        searchHistory,
      }}>
      {children}
    </MapContext.Provider>
  );
};
