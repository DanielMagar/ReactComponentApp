import { atom } from "recoil";
import accordiandata from "../data/accordiandata.json";

const AccordianAtom = atom({
  key: "AccordianAtom",
  default: accordiandata,
});
export default AccordianAtom;
