import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import HomeButton from "../components/HomeButton/HomeButton";
import HomeVideo from "../components/HomeVideo_Section/HomeVideo";
import ClientSection from "../components/ClientSection/ClientSection";

import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePhotography from "../components/HomePhography/HomePhotography";

AOS.init(); 

const Home = () => {
 
  
  return (
    <>
   
      <HomeBanner />
      <HomePhotography />
      <HomeVideo video={"https://www.youtube.com/embed/pdY94RWx9Pg"} />
      <HomeButton heading="Show more +" path="/filims" />
      <ClientSection />
      
    </>
  );
};

export default Home;
