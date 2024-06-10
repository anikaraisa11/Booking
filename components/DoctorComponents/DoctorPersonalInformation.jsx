"use client";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "react-rating";
import DoctorPhoneCallModal from "./DoctorPhoneCallModal";
import GlobalButton from "../Global/GlobalButton";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

function DoctorInformation({ data }) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  return (
    <div className="flex md:justify-between md:flex-row flex-col  justify-center m-5 gap-5">
      {/* first part */}
      <Image
        src={data?.personalImage}
        width={250}
        height={180}
        alt="image"
        className="rounded-lg text-center md:mx-0 object-cover mx-auto"
      ></Image>
      {/* first part */}
      {/* Second part */}
      <div>
        <h4 className="text-2xl text-gray-600">{data?.name}</h4>
        <h4 className="text-gray-600">{data?.title}</h4>
        <h4 className="text-[#6BC8F2] font-bold">{data?.position}</h4>
        <p>
          <Rating
            placeholderRating={3.5}
            emptySymbol={<i className="text-[#F7C000]  fa-regular fa-star"></i>}
            placeholderSymbol={
              <i className="text-[#F7C000] fa-solid fa-star"></i>
            }
            fullSymbol={<i className="text-[#F7C000] fa-solid fa-star"></i>}
          />
          ({data?.ratings})
        </p>
        <p className="text-gray-500 py-2">
          <i className="mr-1 fa-solid fa-location-dot"></i>
          {data?.location}
        </p>
        <div className="flex mt-2 gap-2">
          <button className="border m-1 p-1 rounded-md">Dental Fillings</button>
          <button className="border m-1 p-1 rounded-md">Whitening</button>
        </div>
      </div>
      {/* Second part */}
      {/* third part */}
      <div className="flex flex-col gap-2">
        <div>
          <i className="text-gray-500 m-1 fa-solid fa-thumbs-up"></i>
          {data?.like}
        </div>
        <div>
          <i className="text-gray-500 m-1 fa-regular fa-comment"></i>
          {data?.comments} Feedback
        </div>
        <div>
          <i className="text-gray-500 m-1 fa-solid fa-location-dot"></i>
          {data?.location} Feedback
        </div>
        <div>
          <i className="text-gray-500 m-1 fa-solid fa-dollar-sign"></i>
          {data?.amount} Feedback
        </div>
        <DoctorPhoneCallModal data={data} open={open} setOpen={setOpen} />
        <GlobalButton
          text="Book Appointment"
          modifyclassName="hover:bg-white hover:shadow-none hover:border hover:text-[#2CB8F1] border-[#2CB8F1]"
        />
        <div className="flex items-center justify-center mt-5 gap-3">
          
          <FacebookShareButton url="https://demo.webcodecare.com/">
            <i className="text-[22px] text-[#008080] fa-brands fa-facebook"></i>
          </FacebookShareButton>{" "}
          |
          <WhatsappShareButton url="https://demo.webcodecare.com/">
            <i className="text-[22px] text-[#008080] fa-brands fa-whatsapp"></i>
          </WhatsappShareButton>{" "}
          |
          <LinkedinShareButton url="https://demo.webcodecare.com/">
            <i className="text-[22px] text-[#008080] fa-brands fa-linkedin"></i>
          </LinkedinShareButton>{" "}
          |
          <TwitterShareButton url="https://demo.webcodecare.com/">
            <i className="text-[22px] text-[#008080]  fa-brands fa-twitter"></i>
          </TwitterShareButton>
        </div>
        {/* <FacebookShareButton url={currentPage}>Share on Facebook</FacebookShareButton> */}
      </div>
      {/* third part */}
    </div>
  );
}

export default DoctorInformation;
