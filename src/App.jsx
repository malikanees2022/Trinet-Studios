import React from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";

import MainPage from "./components/home/MainPage";
import SecondPage from "./components/secondpage/SecondPage";
import ThirdSection from "./components/thirdsection/ThirdSection";
import FourSection from "./components/foursection/FourSection";
import FiveSection from "./components/fivesection/FiveSection";
import SixSection from "./components/sixsection/SixSection";
import SevenSection from "./components/sevensection/SevenSection";
import EightSection from "./components/eightsection/EightSection";
import NineSection from "./components/ninesection/NineSection";
import Tensection from "./components/tensection/tensection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <MainPage />

      <SecondPage />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection/>
      <SevenSection/>
      <EightSection/>
      <NineSection/>
      <Tensection/>
      <Footer/>
    </div>
  );
}

export default App;
