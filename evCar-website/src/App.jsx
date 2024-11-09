import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Drive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        />
      </div>
    </>
  );
}

export default App;
