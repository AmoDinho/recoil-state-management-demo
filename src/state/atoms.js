import { atom } from "recoil";

const driverState = atom({
  key: "driverState",
  default: ["Max Verstappen", "Lando Norris"],
});

const circuitState = atom({
  key: "circuitState",
  default: [],
});
export { driverState, circuitState };
