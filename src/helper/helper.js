export const getLocation = (location) => {
  location = location.split(",");

  return [parseInt(location[0]), parseInt(location[1])];
};
