"use client";
import React from "react";
import "./Testimonial.css";
import { testimonialData } from "./TestimonialData";
import Slider from "react-slick";
import Image from "next/image";

function Testimonial() {
  // testimonialData
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="testimonial-section">
      <div className="customContainer">
        <div className="slider-container">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <div key={index}>
                <div className="mt-4">
                  <div className="flex gap-20 items-center">
                    <div>
                      <Image
                        src={item.img}
                        width={300}
                        height={300}
                        style={{ borderRadius: "50%" }}
                        alt="image"
                      />
                    </div>
                    <div>
                      <h2 className="text-[#2DB1EC] font-bold">Testimonial</h2>
                      <h2 className=" text-4xl mt-4 mb-4 font-bold">
                        {item.info}
                      </h2>
                      <p className="text-gray-500 py-5">{item.description}</p>
                      <b className="text-[#2DB1EC] py-5">{item.name}</b>{" "}
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
