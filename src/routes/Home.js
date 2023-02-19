import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import HomeButton from "../components/HomeButton/HomeButton";
import HomeVideo from "../components/HomeVideo_Section/HomeVideo";
import ClientSection from "../components/ClientSection/ClientSection";
import HomeVideoOne from "../assets/img/Showreel Aug 17.mov";

import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePhotography from "../components/HomePhography/HomePhotography";
import HomeAbout from "../components/HomeAboutSection/HomeAbout";

AOS.init(); 

const Home = () => {
 
  
  return (
    <>
   
      <HomeBanner />
      <HomePhotography />
      <HomeAbout />
      <HomeVideo video={HomeVideoOne} path="/filims"/>
      <HomeButton heading="Show more +" path="/filims" />
      <ClientSection />
      
    </>
  );
};

export default Home;
