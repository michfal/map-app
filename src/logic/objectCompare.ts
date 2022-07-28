export const objectCompare = (
  object1: IAdressFormat,
  object2: IAdressFormat
) => {
  // console.log(object1);
  // console.log(object2);
  const shallowComparison = JSON.stringify(object1) === JSON.stringify(object2);
  // console.log(shallowComparison);
  return shallowComparison;
};
