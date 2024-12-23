import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Quary from "./Quary";
import Products from "./Products";
import CoreFeatures from "./CoreFeatures";
import Team from "./Team";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Quary />
      <Products />
      <Team />
      <CoreFeatures />
      <Testimonial />
    </div>
  );
};

export default HomePage;
