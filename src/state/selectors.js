import { selector, selectorFamily } from "recoil";
import axios from "axios";
import { circuitState, singleDriverState } from "./atoms";
const circuitsQuery = selector({
  key: "circuits",
  get: async () => {
    const circuitResponse = await axios.get(
      `https://ergast.com/api/f1/2021/circuits.json`
    );
    return circuitResponse.data.MRData.CircuitTable.Circuits;
  },
  set: ({ set }, newValue) => set(circuitState, newValue),
});

const driverQuery = selectorFamily({
  key: "driver",
  get: (driverName) => async () => {
    const driverResponse = await axios.get(
      `https://ergast.com/api/f1/drivers/${driverName}.json`
    );
    return driverResponse.data.MRData.DriverTable.Drivers[0];
  },
  set: ({ set }, newValue) => set(singleDriverState, newValue),
});

export { circuitsQuery, driverQuery };
