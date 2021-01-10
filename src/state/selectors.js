import { selector } from "recoil";
import axios from "axios";
import { circuitState } from "./atoms";
const circuitsQuery = selector({
  key: "circuits",
  set: async ({ set }) => {
    const circuitResponse = await axios.get(
      `http://ergast.com/api/f1/2021/circuits.json`
    );
    set(circuitState, circuitResponse.data.MRData.CircuitTable.Circuits);
  },
});

export { circuitsQuery };
