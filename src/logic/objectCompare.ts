interface IObject {
  adress1: string;
  adress1LatLng: { lat: number; lng: number };
  adress2: string;
  adress2LatLng: { lat: number; lng: number };
}

export const objectCompare = (object1: IObject, object2: IObject) => {
  console.log(object1);
  console.log(object2);
  const shallowComparison = JSON.stringify(object1) === JSON.stringify(object2);
  console.log(shallowComparison);
  return shallowComparison;
};
