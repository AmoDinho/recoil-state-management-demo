import { atom } from "recoil";

const driverState = atom({
  key: "driverState",
  default: ["Max Verstappen", "Lando Norris"],
});

const circuitState = atom({
  key: "circuitState",
  default: [],
});

const singleDriverState = atom({
  key: "singleDriverState",
  default: {},
});
export { driverState, circuitState, singleDriverState };
