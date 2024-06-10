"use client";
import { doctorInformationData } from "@/components/DoctorComponents/doctorData";
import SingleDoctorInfo from "@/components/DoctorComponents/SingleDoctorInfo";
import GlobalForm from "@/components/Global/GlobalForm";
import GlobalSelect from "@/components/Global/GlobalSelect";
import { useState } from "react";
import "../../components/DoctorComponents/DoctorComponents.css";
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';

function Doctor() {
  const [viewMode, setViewMode] = useState('grid'); // 'list' or 'grid'

  const options = [
    {
      value: "Sort By",
      label: "Sort By",
    },
    {
      value: "Rating",
      label: "Rating",
    },
    {
      value: "Popular",
      label: "Popular",
    },
    {
      value: "Latest",
      label: "Latest",
    },
    {
      value: "Free",
      label: "Free",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-12">
        <div className="md:col-span-7 col-span-12 mx-6">
          <div className="flex justify-between">
            <div className="font-bold text-gray-600">2245 Doctors found</div>
            <div className="flex gap-5 items-center">
              <GlobalForm>
                <div className="flex space-x-4">
                  <GlobalSelect
                    name="selectValue1"
                    defaultValue="Latest"
                    options={options}
                  ></GlobalSelect>
                  <div className="flex space-x-2 mt-4">
                    <div
                      className={`bg-teal-700 p-2 rounded h-10 cursor-pointer ${viewMode === 'grid' ? 'bg-teal-900' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <AppstoreOutlined className="text-2xl text-white mb-2" />
                    </div>
                    <div
                      className={`bg-teal-700 p-2 rounded h-10 cursor-pointer ${viewMode === 'list' ? 'bg-teal-900' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <MenuOutlined className="text-2xl text-white mb-2" />
                    </div>
                  </div>
                </div>
              </GlobalForm>
            </div>
          </div>
          <div
            className={`mt-4 w-full ${
              viewMode === 'grid'
                ? 'grid grid-cols-2 gap-4'
                : 'flex flex-col space-y-4'
            }`}
          >
            {doctorInformationData.map((item, index) => (
              <SingleDoctorInfo
                item={item}
                key={index}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-5 sticky top-0 text-center col-span-12">
          <div
            className="map-container"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786&ll=27.994402,-81.760254"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                pointerEvents: "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
