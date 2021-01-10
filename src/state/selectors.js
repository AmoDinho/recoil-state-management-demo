import { selector } from "recoil";
import axios from "axios";
const circuitsQuery = selector({
  key: "circuits",
  get: async () => {
    const circuitResponse = await axios.get(
      `http://ergast.com/api/f1/2021/circuits.json`
    );
    console.log(circuitResponse);
    return circuitResponse;
  },
});

export { circuitsQuery };
