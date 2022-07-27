import { atom } from "recoil";
import states from "../data/states.json";

const StateAtom = atom({
  key: "StateAtom",
  default: states,
});

export default StateAtom;
