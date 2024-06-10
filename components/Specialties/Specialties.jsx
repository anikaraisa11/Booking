"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "./Specialties.css";
import GlobalButton from "../Global/GlobalButton";
import { useSpecialtiesDataQuery } from "../../lib/redux/features/specialties/specialtiesApi";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import TitleAndImage from "../TitleAndImage/TitleAndImage";

function Specialties() {
  const { isLoading, isError, data } = useSpecialtiesDataQuery();
  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error ErrorMessage="Something went wrong" />;
  }
  if (!isLoading && !isError && data?.data.length > 0) {
    content = <Error ErrorMessage="Data not found" />;
  }
 

  if (!isLoading && !isError && data?.data.length > 0) {
    content = data?.data?.map((item, index) => (
      <div key={index} className="mt-16 py-5">
        <div className="m-3 border py-7 text-center rounded-lg">
          <div className="w-[100px] extraHover h-[100px] rounded-[50%] text-center mx-auto border">
            <Image
              src={item?.image?.url}
              height={200}
              width={200}
              style={{
                borderRadius: "50%",
                padding: "20px",
                margin: "0px auto",
                textAlign: "center",
              }}
              alt="fddgg"
            />
          </div>
          <h4 className="capitalize">{item.name}</h4>
        </div>
      </div>
    ));
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="customContainer py-10">
      <TitleAndImage title="Specialties" />
      <div className="slider-container py-3">
        <Slider {...settings}>{content} </Slider>
      </div>
      <div className="text-center mb-5">
        <GlobalButton text="See All Specialties" />
      </div>
    </div>
  );
}

export default Specialties;
