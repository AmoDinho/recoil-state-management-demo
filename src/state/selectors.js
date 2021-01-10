import { selector } from "recoil";
import axios from "axios";
const circuitsQuery = selector({
  key: "circuits",
  get: async () => {
    const circuitResponse = await axios.get(
      `http://ergast.com/api/f1/2021/circuits`
    );
    console.log("circuitResponse", circuitResponse);
  },
});

export { circuitsQuery };
