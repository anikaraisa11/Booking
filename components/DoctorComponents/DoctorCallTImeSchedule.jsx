import React, { useState } from "react";

function DoctorCallTImeSchedule({ setCurrentModalData, setTimeSchedule }) {
  const data = [
    { minute: 5, price: 12.5 },
    { minute: 10, price: 15.0 },
    { minute: 15, price: 18.5 },
    { minute: 20, price: 20.0 },
    { minute: 25, price: 22.5 },
    { minute: 30, price: 25.0 },
    { minute: 35, price: 28.5 },
    { minute: 40, price: 30.0 },
    { minute: 45, price: 32.5 },
    { minute: 50, price: 35.0 },
    { minute: 55, price: 37.5 },
    { minute: 60, price: 40.0 },
  ];
  return (
    <>
      <div className="customContainer">
        <h1 className="font-bold mt-4 text-[#008080]">
          How many minutes would you like to purchase
        </h1>
        <div className=" grid gap-3 mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#008080] text-white p-3 cursor-pointer text-center"
              onClick={() => setTimeSchedule(item)}
            >
              <h2 className=" text-2xl">{item.minute}</h2>
              <h4 className="font-medium ">Minute{item.minute}</h4>
              <hr className="text-white" />
              <h3 className=" font-bold">Price:{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorCallTImeSchedule;
