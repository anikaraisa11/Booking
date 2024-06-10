"use client";
import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import "./Partners.css";
import img1 from "../../src/assets/img/Partners/1.svg";
import img2 from "../../src/assets/img/Partners/2.svg";
import img3 from "../../src/assets/img/Partners/3.svg";
import img4 from "../../src/assets/img/Partners/4.svg";
import img5 from "../../src/assets/img/Partners/5.svg";
import img6 from "../../src/assets/img/Partners/6.svg";
import img7 from "../../src/assets/img/Partners/7.svg";
import img8 from "../../src/assets/img/Partners/8.svg";
import icon from "../../src/assets/img/a.svg";

function Partners() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="customContainer">
      <div className="customContainer py-10">
        <div className="text-center">
          <div className="text-2xl  md:text-4xl font-bold relative">
            Our Partners
            <Image
              src={icon}
              className="absolute  top-0 left-[60%]"
              alt="Icon"
              height={50}
              width={50}
            />
          </div>
        </div>
        <div className="slider-container ">
          <Slider {...settings}>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img1}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img2}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img3}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img5}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img6}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img7}
                width={120}
                height={150}
                alt="image"
              />
            </div>
            <div className=" mx-10 m-10">
              {" "}
              <Image
                className="object-fill p-5 border"
                src={img8}
                width={120}
                height={150}
                alt="image"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
