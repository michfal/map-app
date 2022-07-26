export const capitalize = (name: string) => {
  const lowerCaseName = name.toLowerCase();
  const capitalized = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
  return capitalized;
};
