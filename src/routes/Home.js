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
          path="/Photography"
        />
        <ImageGrid />
        <HomeVideo video={"https://www.youtube.com/embed/pdY94RWx9Pg"} />
        <HomeButton 
          heading="Show more +"
          path="/filims"
        />
        <ClientSection />
        
        

    </>
  );
};

export default Home;
