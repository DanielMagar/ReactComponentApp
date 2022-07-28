import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Rcomp1 from "./components/Rcomp1";
import Rcomp2 from "./components/Rcomp2";
import Rcomp3 from "./components/Rcomp3";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Rcomp2 />
      <Rcomp1 />
      <Rcomp3 />
    </>
  );
}

export default App;
