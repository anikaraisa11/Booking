'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


function DoctorCall({ data }) {
  const router = useRouter();

  // const navigateToDoctorCall = () => {
  //   router.push("/DoctorCall");
  // }
  // useEffect(() => {
    
  //   const timeout = setTimeout(() => {
  //     navigateToDoctorCall();
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [router]);

  return (
    <div>
      <div className="w-[150px] h-[150px] relative text-center mx-auto">
        <div className="ring"></div>
        <div style={{ margin: "0 auto" }}>
          <Image
            src={data.personalImage}
            width={200}
            height={200}
            className="my-5 mx-auto"
            style={{ borderRadius: "50%" }}
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-center mt-6 font-bold">{data.name}</p>{" "}
        <p className="text-center font-bold text-gray-600">Connecting ...</p>
      </div>
      <div className="flex gap-10 items-center justify-center">
        <div className="mt-5">
          <i
            style={{
              borderRadius: "50%",
              fontSize: "20px",
              background: "rgb(102, 211, 114)",
              color: "white",
            }}
            className=" p-8 border fa-solid fa-phone"
          ></i>
        </div>
        <div className="mt-5">
          <i
            style={{
              borderRadius: "50%",
              fontSize: "20px",
              background: "rgb(241, 112, 112)",
              color: "white",
            }}
            className=" p-8 border fa-solid fa-phone-slash"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default DoctorCall;
