import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Specialities from "../Specialties/Specialties";
import Doctor from "../Doctor/Doctor";
import Work from "../Work/Work";
import LatestArticles from "../LatestArticles/LatestArticles";
import AppBar from "../AppBar/AppBar";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import Testimonial from "../Testimonial/Testimonial";
import Partners from "../Partners/Partners";


function MainHome() {
  return (
    <>
      <Header />
      <Banner />
      <Specialities />
      <Doctor />
      <Work />
      <LatestArticles />
      <AppBar />
      <AskedQuestions />
      <Testimonial />
      <Partners />
    </>
  );
}

export default MainHome;
