import { RecoilRoot } from "recoil";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Player from "./Components/Player";
import "./index.css";
import { Suspense } from "react";
import { PropagateLoader } from "react-spinners";

function App() {
  return (
    <>
      <Suspense fallback={<PropagateLoader color="#36d7b7" />}>
        <RecoilRoot>
          <Navbar />
          <Hero />
          <Player />
        </RecoilRoot>
      </Suspense>
    </>
  );
}

export default App;
