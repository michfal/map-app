export async function getLocationParams(adress) {
  //   const searchAdress = 'Invalidenstr' + '117' + 'Berlin';

  const searchAdress =
    `${adress.streetName}` +
    `${adress.number}` +
    `${adress.city}` +
    `${adress.country}`;

  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${searchAdress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
  );
  const data = await response.json();

  console.log(data.items);
  // const position = await setPosition(data.items[0].position);
  const position = await data.items[0].position;
  getRoute();
  return position;
}

async function getRoute() {
  //   const searchAdress = 'Invalidenstr' + '117' + 'Berlin';

  const response = await fetch(
    // `&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
    `https://routematching.hereapi.com/2/calculateroute.json?routeMatch=1&mode=fastest;car;traffic:disabled&legal=access,oneway,thrutraf,turn&attributes=LINK_FCn(REF_NODE_NEIGHBOR_LINKS,NONREF_NODE_NEIGHBOR_LINKS)&file=undefined&apiKey=${process.env.REACT_APP_HERE_API_KEY}
    `
  );
  const data = await response.json();

  console.log(data);
  // const position = await setPosition(data.items[0].position);
  // const position = await data.items[0].position;
  // return position;
}
