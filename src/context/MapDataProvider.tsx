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

  const [currentAdresses, setCurrentAdresses] = useState<IAdressFormat>({
    adress1: '15 Podborska Warszawa',
    adress1LatLng: { lat: 52.19157, lng: 20.95611 },
    adress2: '11 Lipińskiego Sanok',
    adress2LatLng: { lat: 49.55336, lng: 22.20927 },
  });

  //searach history

  const [searchHistory, setSearchHistory] = useState<Array<IAdressFormat>>([]);

  const handleSearchHistory = (adress: IAdressFormat) => {
    // objectCompare(searchHistory[0])
    setSearchHistory((searchHistory: any) => [...searchHistory, adress]);
  };

  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory]);

  //handle serach form
  const handleLocationSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const location1params = await getLocationParams(currentAdresses.adress1);
    const location2params = await getLocationParams(currentAdresses.adress2);
    setCurrentAdresses({
      ...currentAdresses,
      adress1LatLng: location1params,
      adress2LatLng: location2params,
    });
    // handleSearchHistory(currentAdresses);
  };
  return (
    <MapContext.Provider
      value={{
        handleLocationSubmit,
        currentAdresses,
        setCurrentAdresses,
        travelData,
        setTravelData,
      }}>
      {children}
    </MapContext.Provider>
  );
};
