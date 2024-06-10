import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import OTPIMG from "../../src/assets/img/otp.png";

// "use client";
// import React, { useEffect, useState } from "react";
// import { Button, Modal } from "antd";
// import Image from "next/image";
// import OTPIMG from "../img/otp.png";
// import { toast, Toaster } from "sonner";
// import { SendOtp } from "@/actions/sendotpfunc";

// function VerifyOTP({ showModal, setIsModalOpen, isModalOpen }) {
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

function VerifyOTP({ showModal, setIsModalOpen, isModalOpen }) {
  const [otpfield, setOtpfield] = useState("");
  const [Timer, setTimerActive] = useState(true);
  const [time, setTimer] = useState(300);
  const [error, setError] = useState("");

  // for resend user need to wait for 120 seconds before next request
  useEffect(() => {
    let interval;
    if (Timer === true) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            // Timer reached 0, stop the timer
            setTimerActive(false);
            clearInterval(interval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [Timer]);

  const handleOk = async () => {
    setTimer(0);
    setTimerActive(false);
    // check the verfication
    // first get the request id of the client from localstorage
    const clientId = localStorage.getItem("client_Id")
      ? localStorage.getItem("client_Id")
      : undefined;

    if (clientId) {
      // send the request to the server
      await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId,
          otp: otpfield,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          const { message } = res || {};
          if (message === "OK") {
            setIsModalOpen(false);
            localStorage.removeItem("client_number");
            localStorage.removeItem("client_Id");
            toast.success("Welcome you are verified client");

            // here if the otp upate empt the otp feild and also reset the timer
            setOtpfield("");
            setTimer(300);
            setTimerActive(true);
          } else {
            setOtpfield("");

            setError(res.message);
            toast.warning("Something went wrong otp");
          }
        });
    }

    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // if user cannot get the otp then send again the otp
  const handlerResendNumber = async () => {
    setTimer(300);
    setTimerActive(true);
    // get the number for localStorage
    const ClientNumber = localStorage.getItem("client_number")
      ? JSON.parse(localStorage.getItem("client_number"))
      : undefined;

    if (ClientNumber) {
      //here we will send otp again to user

      const GET_Receipent_ID = await SendOtp(`/api/sms`, ClientNumber);

      if (GET_Receipent_ID) {
        localStorage.setItem("client_Id", GET_Receipent_ID);
      }
    }
  };

  return (
    <>
      <Modal
        className="verifyOtp"
        open={isModalOpen}
        okButtonProps={{ style: { backgroundColor: "#008080" } }}
        okText="Verify"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="text-center">
          <h3 className="text-2xl text-[#008080] font-bold">
            Verify Your Number
          </h3>
          <Image
            src={OTPIMG}
            alt="OTPIMAGE"
            width={100}
            className="text-center mx-auto my-5"
            height={100}
            style={{ borderRadius: "50%" }}
          />

          <input
            type="text"
            placeholder="Input Your Mobile OTP"
            className="p-2 outline-none border-2 px-2  w-full"
            value={otpfield}
            onChange={(e) => {
              setError("");
              setOtpfield(e.target.value);
            }}
          />
          <h3>{error}</h3>
          {time === 0 ? (
            <h3
              className="text-xl text-[#008080] border-2 border-sky-400 px-2 cursor-pointer  font-medium"
              onClick={handlerResendNumber}
            >
              Resend OTP again
            </h3>
          ) : (
            <h3 className="text-xl text-[#008080]  font-medium">
              Resend{" "}
              {`${Math.floor(time / 60)}:${
                time % (60).toString().padStart(2, "0")
              }`}
            </h3>
          )}
        </div>
      </Modal>
    </>
  );
}

export default VerifyOTP;
