import React from "react";
import Navbar from "../components/NavbarHero/navbar";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HomeButton from "../components/HomeButton/HomeButton";
import HomeVideo from "../components/HomeVideo_Section/HomeVideo";
import ClientSection from "../components/ClientSection/ClientSection";


const Home = () => {
  return (
    <>
        <Navbar />
        <HomeBanner />
        <HomeButton 
          heading="Photography"
          path="/Portfolio"
        />
        <ImageGrid />
        <HomeVideo />
        <HomeButton 
          heading="Show more +"
          path="/About"
        />
        <ClientSection />
        

    </>
  );
};

export default Home;
