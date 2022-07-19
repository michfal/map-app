import { useEffect, useState, ReactNode } from 'react';
import { MapContext } from './context';
import { getLocationParams } from '../logic/getLocationParams';
import { objectCompare } from '../logic/objectCompare';
import { NullLiteral } from 'typescript';

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

  const baseAdresses = {
    adress1: '',
    adress1LatLng: { lat: 52.2356, lng: 21.01037 },
    adress2: '',
    adress2LatLng: { lat: 51.77234, lng: 19.47502 },
  };

  const [currentAdresses, setCurrentAdresses] =
    useState<IAdressFormat>(baseAdresses);

  const handleCurrentAdresses = async (param1: any, param2: any) => {
    setCurrentAdresses({
      ...currentAdresses,
      adress1LatLng: param1,
      adress2LatLng: param2,
    });
  };

  //search history

  const [searchHistory, setSearchHistory] = useState<Array<IAdressFormat>>([]);

  // const handleSearchHistory = async (adress: IAdressFormat) => {
  //   // console.log(objectCompare(searchHistory[0], adress));
  //   // console.log(typeof searchHistory[0]);
  //   if (typeof searchHistory[0] == 'object') {
  //     if (!objectCompare(searchHistory[0], adress)) {
  //       setSearchHistory((searchHistory: any) => [adress, ...searchHistory]);
  //     }
  //   }
  //   !searchHistory[0] &&
  //     setSearchHistory((searchHistory: any) => [adress, ...searchHistory]);
  // };

  // useEffect(() => {
  //   console.log(currentAdresses);
  // }, [currentAdresses]);

  // useEffect(() => {
  //   console.log(searchHistory);
  // }, [searchHistory]);

  //handle serach form
  const handleLocationSearch = async () => {
    const location1params = await getLocationParams(currentAdresses.adress1);
    const location2params = await getLocationParams(currentAdresses.adress2);
    setCurrentAdresses({
      ...currentAdresses,
      adress1LatLng: location1params,
      adress2LatLng: location2params,
    });
  };

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
