import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../OpenAccount";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="ml-[12vw] mr-[10vw]">
        <Stats />
        <Pricing />
        <Education />
 
        <OpenAccount />
      </div>
        {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
