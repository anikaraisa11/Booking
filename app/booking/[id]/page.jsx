"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import { doctorInformationData } from "@/components/DoctorComponents/doctorData";
import Rating from "react-rating";
import GlobalButton from "@/components/Global/GlobalButton";

function page() {
  const { id } = useParams();
  const data = doctorInformationData.find(
    (item, index) => item.id === Number(id)
  );

  const getFormattedDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getDayOfWeek = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    return days[date.getDay()];
  };
  const timeSlots = [
    {
      day: "SUN",
      timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      day: "MON",
      timeSlots: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      day: "TUE",
      timeSlots: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
    },
    {
      day: "WED",
      timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      day: "THU",
      timeSlots: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      day: "FRI",
      timeSlots: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
    },
    {
      day: "SAT",
      timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
  ];

  return (
    <>
      <Header />
      <PageTitle
        headline="Booking"
        hrefLink={`/booking/${id}`}
        title="Booking"
      />

      <div className="customContainer">
        <div className=" border mt-5 rounded-md mb-5">
          <Image
            alt="image"
            src={data?.personalImage}
            width={150}
            height={150}
            className="p-5"
            style={{ borderRadius: "4px" }}
          />
          <p className="px-3">
            <Rating
              placeholderRating={3.5}
              emptySymbol={
                <i className="text-[#F7C000]  fa-regular fa-star"></i>
              }
              placeholderSymbol={
                <i className="text-[#F7C000] fa-solid fa-star"></i>
              }
              fullSymbol={<i className="text-[#F7C000] fa-solid fa-star"></i>}
            />
            ({data?.ratings})
          </p>
          <div className="flex gap-4 mb-4 items-center text-gray-500 mx-3">
            <i className="fa-solid fa-location-dot"></i>
            {data?.location}
          </div>
        </div>
      </div>

      <div className="customContainer">
        <h1 className="text-2xl"> {getFormattedDate()} </h1>
        <h1 className="text-2xl text-gray-500"> {getDayOfWeek()} </h1>
        <div className="overflow-x-auto">
          <div className="flex justify-between border-10">
            {timeSlots.map((item, index) => (
              <div className="mt-10 mb-10">
                <div className="text-center ">
                  <b>{item.day}</b> <br />
                  {item.timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className="text-xl w-28 h-10 before:absolute before:block before:inset-0 before:-z-10 before:bg-teal-700 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-teal-400 after:absolute relative inline-block mt-5 rounded-lg"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-10 mb-10 justify-end">
          <GlobalButton text="Proceed To Pay" />
        </div>
      </div>
    </>
  );
}

export default page;
