import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Quary from "./Quary";
import Products from "./Products";
import CoreFeatures from "./CoreFeatures";
import Team from "./Team";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />
      <Quary />
      <Products />
      <Team />
      <CoreFeatures />
    </div>
  );
};

export default HomePage;
