"use client";
import React from "react";
import { Select } from "antd";
import { Input, Button } from "antd";
const { TextArea } = Input;
import "../myDetails.css";
import GlobalButton from "@/components/Global/GlobalButton";

function Listing() {
  const optionsData = [
    {
      value: "5",
      label: "$5",
    },
    {
      value: "10",
      label: "$10",
    },
    {
      value: "20",
      label: "$20",
    },
    {
      value: "30",
      label: "$30",
    },
    {
      value: "40",
      label: "$40",
    },
    {
      value: "50",
      label: "$50",
    },
    {
      value: "60",
      label: "$60",
    },
    {
      value: "70",
      label: "$70",
    },
    {
      value: "80",
      label: "$80",
    },
    {
      value: "90",
      label: "$90",
    },
    {
      value: "100",
      label: "$100",
    },
  ];
  const optionsDataAdvisor = [
    {
      value: "Financial",
      label: "Financial Advisor",
    },
    {
      value: "Legal",
      label: "Legal Advisor",
    },
    {
      value: "Health",
      label: "Health Advisor",
    },
    {
      value: "Career",
      label: "Career Advisor",
    },
    {
      value: "Education",
      label: "Education Advisor",
    },
    {
      value: "Technology",
      label: "Technology Advisor",
    },
    {
      value: "Relationship",
      label: "Relationship Advisor",
    },
    {
      value: "Travel",
      label: "Travel Advisor",
    },
    {
      value: "Business",
      label: "Business Advisor",
    },
    {
      value: "Personal",
      label: "Personal Advisor",
    },
    // Add more options as needed
  ];
  const doctorCategories = [
    {
      value: "Dermatologist",
      label: "Dermatologist",
    },
    {
      value: "Pediatrician",
      label: "Pediatrician",
    },
    {
      value: "Cardiologist",
      label: "Cardiologist",
    },
    {
      value: "Gastroenterologist",
      label: "Gastroenterologist",
    },
    {
      value: "Neurologist",
      label: "Neurologist",
    },
    {
      value: "Oncologist",
      label: "Oncologist",
    },
    {
      value: "Urologist",
      label: "Urologist",
    },
    {
      value: "Endocrinologist",
      label: "Endocrinologist",
    },
    {
      value: "Psychiatrist",
      label: "Psychiatrist",
    },
    {
      value: "Radiologist",
      label: "Radiologist",
    },
    // Add more categories as needed
  ];

  return (
    <div>
      <h3 className="text-2xl text-center">Primary Listing</h3>
      <div className="w-[90%] mx-auto">
        <div className="mt-8 grid gap-5 items-center md:grid-cols-2 grid-cols-1">
          <div>
            <div className="mt-5">
              <div className="mt-5">
                <Input type="number" placeholder="$Min Price Video" />
              </div>

              <div className="mt-5">
                <Input type="number" placeholder="$Min Price Audio" />
              </div>

              <div className="mt-5">
                <Input type="number" placeholder="$Min Price Chat" />
              </div>

              <div className="mt-5">
                <Input type="number" placeholder="What Type Advisor Are you?" />
              </div>
            </div>
          </div>
          <div>
            <TextArea
              size="large"
              placeholder="Write Short Presentation"
              rows={6}
            />
            <div className="grid grid-cols-2 mt-5 gap-5">
              <GlobalButton text="Enable" />
              <button className="text-xl w-32 h-11 before:absolute before:block before:inset-0 before:-z-10 before:bg-red-600 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-500 after:absolute relative inline-block">
                Disable
              </button>
              <GlobalButton text="Enable" />
              <button className="text-xl w-32 h-11 before:absolute before:block before:inset-0 before:-z-10 before:bg-red-600 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-500 after:absolute relative inline-block">
                Disable
              </button>
              <GlobalButton text="Enable" />
              <button className="text-xl w-32 h-11 before:absolute before:block before:inset-0 before:-z-10 before:bg-red-600 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-500 after:absolute relative inline-block">
                Disable
              </button>
            </div>
            <div className="mt-5">
              <Select
                size="large"
                className="select"
                style={{ width: "100%" }}
                defaultValue="Choose a Category"
                options={doctorCategories}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
