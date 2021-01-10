import { atom } from "recoil";

const driverState = atom({
  key: "driverState",
  default: ["Max Verstappen", "Lando Norris"],
});

export { driverState };
