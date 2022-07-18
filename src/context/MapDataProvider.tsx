import { useEffect, useState, ReactNode } from 'react';
import { MapContext } from './context';
import { getLocationParams } from '../logic/getLocationParams';
import { objectCompare } from '../logic/objectCompare';

export const MapDataProvider = ({ children }: { children: ReactNode }) => {
  interface ITravelData {
    distance: number;
    time: number;
  }

  const [travelData, setTravelData] = useState<ITravelData>({
    distance: 0,
    time: 0,
  });

  interface IAdressFormat {
    adress1: string;
    adress1LatLng: { lat: number; lng: number };
    adress2: string;
    adress2LatLng: { lat: number; lng: number };
  }

  const [currentAdresses, setCurrentAdresses] = useState<IAdressFormat | any>({
    adress1: '15 Podborska Warszawa',
    adress1LatLng: { lat: 52.19157, lng: 20.95611 },
    adress2: '11 Lipińskiego Sanok',
    adress2LatLng: { lat: 49.55336, lng: 22.20927 },
  });

  //search history

  const [searchHistory, setSearchHistory] = useState<Array<IAdressFormat>>([]);

  const handleSearchHistory = async (adress: IAdressFormat) => {
    // console.log(objectCompare(searchHistory[0], adress));
    // console.log(typeof searchHistory[0]);
    if (typeof searchHistory[0] == 'object') {
      if (!objectCompare(searchHistory[0], adress)) {
        setSearchHistory((searchHistory: any) => [adress, ...searchHistory]);
      }
    }
    !searchHistory[0] &&
      setSearchHistory((searchHistory: any) => [adress, ...searchHistory]);
  };

  useEffect(() => {
    console.log(currentAdresses);
  }, [currentAdresses]);

  // useEffect(() => {
  //   console.log(searchHistory);
  // }, [searchHistory]);

  //handle serach form
  const handleLocationSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const location1params = await getLocationParams(currentAdresses.adress1);
    const location2params = await getLocationParams(currentAdresses.adress2);
    setCurrentAdresses({
      ...currentAdresses,
      adress1LatLng: location1params,
      adress2LatLng: location2params,
    });
    // await handleAdresses(location1params, location2params);
    // handleSearchHistory(currentAdresses);
  };

  // useEffect(() => {
  //   // console.log(currentAdresses);
  //   handleLocationSearch();
  //   handleSearchHistory(currentAdresses);
  // }, [currentAdresses.adress1, currentAdresses.adress2]);

  return (
    <MapContext.Provider
      value={{
        handleLocationSearch,
        currentAdresses,
        setCurrentAdresses,
        travelData,
        setTravelData,
      }}>
      {children}
    </MapContext.Provider>
  );
};
