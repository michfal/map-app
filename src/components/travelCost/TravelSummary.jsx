import { useState } from 'react';

//cena paliwa? podaje user
//śrSpalanie na 100km? podaje user
//dystans (pobiera z api)

//ileSpali = (dystans * śrSpalanie) / 100
//koszt = cenaPaliwa * ileSpali

// const distance = 400;

//Display:
//>distance
//>cost
//>fuel consumption
//travel time

function handleInput() {}

export function TravelSummary({ travelData }) {
  const [fuelPrice, setFuelPrice] = useState();
  const [avgFuelConsumption, setAvgFuelConsumption] = useState();
  console.log(fuelPrice);
  console.log(avgFuelConsumption);

  const totalFuelConsumption = (travelData.distance * avgFuelConsumption) / 100;
  const travelCost = Math.round(fuelPrice * totalFuelConsumption);
  return (
    <div>
      <form>
        <label>
          Cena paliwa za litr
          <input
            onChange={(e) => setFuelPrice(e.target.value)}
            type='text'
            name='fuelPrice'
            placeholder='cena paliwa'
          />
        </label>
        <label>
          Średnie spalanie litr\100km
          <input
            onChange={(e) => setAvgFuelConsumption(e.target.value)}
            type='text'
            name='avgFuelConsumption'
            placeholder='średnie spalanie'
          />
        </label>
        {/* <input type='text' name='driverHourlyRate' placeholder='Stawka Godzinowa Kierowcy' /> */}
        {/* <input type='submit' /> */}
      </form>
      {fuelPrice && avgFuelConsumption ? (
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
}
