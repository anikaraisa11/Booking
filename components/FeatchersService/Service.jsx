"use client"
import React from "react";
import Image from "next/image";
import icon from "../../app/img/a.svg";
import { useServiceDataQuery } from "../redux/featchers/serviceFeatcehrs/ServiceApi";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Slider from "react-slick";
import service from "../../app/img/service.jpg"
import TitleAndImage from "../TitleAndImage/TitleAndImage";


function Service() {
    const {isError,isLoading,data} = useServiceDataQuery()
    let content ;

    if(isLoading){
        content = <Loading/>
    }
    if(!isLoading && isError){
        content = <Error ErrorMessage="Somthing went wrong"/>
    }
    if(!isLoading && !isError && data?.data.length > 0){
        content = <Error ErrorMessage="Data not found"/>
    }

    
    if(!isLoading && !isError && data?.data.length > 0){
        content = data?.data?.map((item,index) => <div className="mt-5">
            <div className="m-5 p-2 rounded-md">
                <div className="iamge ">
                    <Image src={service} className="img__img" width={300} height={300}  />
                    <div className="img__overlay">
                        <div className="font-bold text-[#2FAEE7] mt-1 mb-2">{item.name}</div>
                        <div className="desc">
                            {item?.desc?.slice(0,80)}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    
    var settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div className="customContainer relative">
      <div className="text-2xl mt-5 md:text-4xl py-10 font-bold">
        <TitleAndImage title="Service"/>
      </div>
      <div className="slider-container py-3">
                <Slider {...settings}>
                        {content}
                </Slider>
            </div>
     
    </div>
  );
}

export default Service;
