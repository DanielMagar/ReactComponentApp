import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Rcomp1 from "./components/Rcomp1";
import Rcomp2 from "./components/Rcomp2";
import Rcomp3 from "./components/Rcomp3";
import Rcomp4 from "./components/Rcomp4";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Rcomp2 />
      <Rcomp1 />
      <Rcomp3 />
      <Rcomp4 />
    </>
  );
}

export default App;
