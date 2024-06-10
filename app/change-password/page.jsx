"use client";
import GlobalButton from "@/components/Global/GlobalButton";
import GlobalForm from "@/components/Global/GlobalForm";
import GlobalInput from "@/components/Global/GlobalInput";
import Header from "@/components/Header/Header";
import React from "react";
import { useForm } from "react-hook-form";

function ChangePassword() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};

  return (
    <div>
        <Header />
      <div className="customContainer">
        <div className="container">
          <div className="flex h-[70vh] py-5 items-center justify-center">
          <div className='w-full bg-white rounded-lg p-5 md:w-[50%]' style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
          <h3 className="text-4xl text-center py-5 font-bold animation">Change  Password</h3>
          <GlobalForm onSubmit={onSubmit}>
              <GlobalInput name="email" label="Enter Your Email" />
              <div className='text-center'>
                <GlobalButton text="Change Password"></GlobalButton>
              </div>
            </GlobalForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
