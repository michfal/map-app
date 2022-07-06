export async function getLocationParams(adress) {
  //   const searchAdress = 'Invalidenstr' + '117' + 'Berlin';

  const searchAdress =
    `${adress.streetName}` + `${adress.number}` + `${adress.city}`;
  // `${adress.country}`;

  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${searchAdress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
  );
  const data = await response.json();

  console.log(data.items);
  // const position = await setPosition(data.items[0].position);
  const position = await data.items[0].position;
  return position;
}
