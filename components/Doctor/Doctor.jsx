"use client";
import React from "react";
import icon from "../../src/assets/img/a.svg";
import Image from "next/image";
import "./Doctor.css";
import { doctorData } from "./DoctorData";
import Slider from "react-slick";

import SingleDoctor from "./SingleDoctor";
// import TitleAndImage from '../TitleAndImage/TitleAndImage';

function Doctor() {
  // doctorData
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="doctor">{/* background */}</div>
      <div className="extraColor">
        <div className="customContainer  relative">
          <div className="text-2xl md:text-4xl font-bold relative">
            Best Doctors
            <Image
              src={icon}
              className="absolute top-[-20px] md:left-[200px] left-[120px]"
              alt="Icon"
              height={50}
              width={50}
              // alt="image"
            />
          </div>
          <div className="slider-container py-10">
            <Slider {...settings}>
              {doctorData.map((item, index) => (
                <SingleDoctor item={item} key={index}  />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="doctor2">{/* background  */}</div>
    </>
  );
}

export default Doctor;
