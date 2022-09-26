import React from "react";
import Banner from "../components/Banner";
import Downloads from "../components/Downloads";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import PasosContainer from "../components/PasosContainer";
import Unete from "../components/Unete";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <>
      <Banner />
      <PasosContainer />
      <Downloads />
      <Unete />
      <Hero />
      <Brands />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
