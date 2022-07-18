import { useState, useContext, useEffect } from 'react';
import { MapContext } from '../../context/context';

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
      <form>
        <label>
          Cena paliwa za litr
          <input
            onChange={handleInput}
            type='text'
            name='fuelPrice'
            placeholder='cena paliwa'
          />
        </label>
        <label>
          Średnie spalanie litr\100km
          <input
            onChange={handleInput}
            type='text'
            name='avgFuelConsumption'
            placeholder='średnie spalanie'
          />
        </label>
        {/* <input type='text' name='driverHourlyRate' placeholder='Stawka Godzinowa Kierowcy' /> */}
        {/* <input type='submit' /> */}
      </form>
      {formInfo.fuelPrice && formInfo.avgFuelConsumption ? (
        <div>
          <h2>Dystans: {travelData.distance}km</h2>
          <h2>Czas: {travelData.time}godz</h2>
          <h2>Zużycie Paliwa {totalFuelConsumption}l</h2>
          <h2>Całkowity Koszt: {travelCost}zł</h2>
        </div>
      ) : (
        <h2>Podaj cenę paliwa i śr spalanie</h2>
      )}
    </div>
  );
};
