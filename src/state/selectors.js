import { selector } from "recoil";
import axios from "axios";
import { circuitState } from "./atoms";
const circuitsQuery = selector({
  key: "circuits",
  get: async () => {
    const circuitResponse = await axios.get(
      `http://ergast.com/api/f1/2021/circuits.json`
    );
    return circuitResponse.data.MRData.CircuitTable.Circuits;
  },
  set: ({ set }, newValue) => set(circuitState, newValue),
});

export { circuitsQuery };
