const getLocationParams = async (adress: string) => {
  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${adress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
  );
  const data = await response.json();

  const position = await data.items[0].position;
  return position;
};

export const getLocationsData = (adress1: string, adress2: string) => {
  // const adressArray = [adress1, adress2]
  return new Promise(async (resolve, reject) => {
    const location1params = await getLocationParams(adress1);
    const location2params = await getLocationParams(adress2);
    resolve({
      adress1: adress1,
      adress1LatLng: location1params,
      adress2: adress2,
      adress2LatLng: location2params,
    });
    reject(console.log('reject'));
  });
};
