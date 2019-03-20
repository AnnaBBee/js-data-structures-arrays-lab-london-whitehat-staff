// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (driver) => {
  drivers.push(driver);
};

const destructivelyPrependDriver = (driver) => {
  drivers.unshift(driver);
};

const destructivelyRemoveLastDriver = (driver) => {
  drivers.pop(driver);
};

const destructivelyRemoveFirstDriver = (driver) => {
  drivers.shift(driver);
};

const appendDriver = (newDriver) => {
  const newDriverArray = [...drivers, newDriver];
  return newDriverArray;
};

const prependDriver = (newDriver) => {
  const newDriverArray = [newDriver, ...drivers];
  return newDriverArray;
};

const removeLastDriver = () => {
  const newDriverArray = drivers.slice(0, drivers.length - 1);
  return newDriverArray;
};

const removeFirstDriver = () => {
  const newDriverArray = drivers.slice(1);
  return newDriverArray;
};
