import { useState, useContext, useEffect } from 'react';
import { MapContext } from '../../context/context';
import {
  GasParams,
  GasParamsContainer,
  TravelInfo,
} from './travelSummary.style';
import { Header } from '../header/header.style';
import { FormInput } from '../searchForm/formStyles.style';

export const TravelSummary: React.FC = () => {
  const { travelData } = useContext(MapContext);

  interface IFormInfo {
    fuelPrice: number;
    avgFuelConsumption: number;
  }

  const [formInfo, setFormInfo] = useState<IFormInfo>({
    fuelPrice: 0,
    avgFuelConsumption: 0,
  });

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormInfo({
      ...formInfo,
      [target.name]: target.value,
    });
  };

  const totalFuelConsumption =
    (travelData.distance * formInfo.avgFuelConsumption) / 100;
  const travelCost = Math.round(formInfo.fuelPrice * totalFuelConsumption);

  return (
    <div>
      <GasParamsContainer>
        <GasParams>
          Cena paliwa za litr
          <FormInput
            onChange={handleInput}
            type='text'
            name='fuelPrice'
            placeholder='cena paliwa'
          />
        </GasParams>
        <GasParams>
          Średnie spalanie litr\100km
          <FormInput
            onChange={handleInput}
            type='text'
            name='avgFuelConsumption'
            placeholder='średnie spalanie'
          />
        </GasParams>
        {/* <input type='text' name='driverHourlyRate' placeholder='Stawka Godzinowa Kierowcy' /> */}
        {/* <input type='submit' /> */}
      </GasParamsContainer>
      {formInfo.fuelPrice && formInfo.avgFuelConsumption ? (
        <div>
          <TravelInfo>Dystans: {travelData.distance} km</TravelInfo>
          <TravelInfo>Czas: {travelData.time} godz</TravelInfo>
          <TravelInfo>Zużycie Paliwa: {totalFuelConsumption} l</TravelInfo>
          <TravelInfo>Całkowity Koszt: {travelCost} zł</TravelInfo>
        </div>
      ) : (
        <TravelInfo>Podaj cenę paliwa i śr spalanie</TravelInfo>
      )}
    </div>
  );
};
