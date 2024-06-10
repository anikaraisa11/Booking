"use client";
import GlobalButton from "@/components/Global/GlobalButton";
import GlobalForm from "@/components/Global/GlobalForm";
import GlobalImageUpload from "@/components/Global/GlobalImageUpload";
import GlobalInput from "@/components/Global/GlobalInput";
import GlobalSelect from "@/components/Global/GlobalSelect";
import GlobalTextArea from "@/components/Global/GlobalTextArea";
import React, { useState } from "react";

function page() {
  const [file,setFile]=useState()
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setFile(file)
    console.log(file)
    return isJpgOrPng && isLt2M;
  };

  const options = bloodGroups.map((item) => ({
    value: item,
    label: item,
  }));
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="w-[90%] mx-auto ">
      <h2 className="text-2xl text-center py-4 font-bold text-[#008080] ">
        Update User Profile
      </h2>
      <div className="border p-5 rounded-3xl">
      <GlobalForm onSubmit={onSubmit}>
        <div className="text-center">
        <GlobalImageUpload beforeUpload={beforeUpload} />
        </div>
        <div className="grid grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          <GlobalInput
            name="name"
            type="text"
            label="Name"
            placeholder="input Your Name"
          />
          <GlobalInput
            name="phone"
            type="number"
            label="Phone"
            placeholder="input Your Number"
          />
          <div>
            <GlobalSelect
              defaultValue="Input Value"
              name="blood_grouop"
              options={options}
              type="text"
              label="Blood Grouop"
            />
          </div>
          <GlobalInput
            name="city"
            placeholder="input Your City"
            type="text"
            label="City"
          />
          <GlobalInput
            name="state"
            placeholder="input Your State"
            type="text"
            label="State"
          />
          <GlobalInput
            name="zip_code"
            placeholder="input Your Zip_Code"
            type="text"
            label="State"
          />
          <GlobalInput
            name="date_of_birth"
            placeholder="input Your Zip_Code"
            type="date"
            label="State"
          />
        </div>
        <GlobalTextArea placeholder="input your address" name="address" />
        <div className="text-center mt-2">
            <GlobalButton  text="Update Profile Data" />
        </div>
      </GlobalForm>
      </div>
    </div>
  );
}

export default page;
