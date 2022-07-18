export const getLocationParams = async (adress: string) => {
  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${adress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
  );
  const data = await response.json();

  const position = await data.items[0].position;
  return position;
};
