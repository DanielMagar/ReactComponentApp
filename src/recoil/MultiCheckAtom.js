import { atom } from "recoil";
import multicheckdata from "../data/multicheckdata.json";

const MultiCheckAtom = atom({
  key: "MultiCheckAtom",
  default: multicheckdata,
});

export default MultiCheckAtom;
