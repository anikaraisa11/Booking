import React from "react";
import accordion from "../../src/assets/img/accordion.png";
import Image from "next/image";
import { Collapse } from "antd";
import icon from "../../src/assets/img/a.svg";

function AskedQuestions() {
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
`;
  return (
    <div className="mt-16 mb-10">
      <div className="customContainer">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#008080]">Get Your Answer</h2>
          <div className="text-2xl py-10 md:text-4xl font-bold relative">
            <h2 className="text-4xl">Frequently Asked Questions</h2>
            <Image
              src={icon}
              className="absolute top-5 left-[70%]"
              alt="Icon"
              height={50}
              width={50}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div>
            <Image src={accordion} width={500} height={500} alt="image" />
          </div>
          <div>
            <Collapse
              className="bg-white mt-5"
              items={[
                {
                  key: "1",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "2",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "3",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "4",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "5",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "6",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              className="bg-white mt-3"
              items={[
                {
                  key: "7",
                  label:
                    "Can i make an Appointment Online with White Plains Hospital Kendi?",
                  children: <p>{text}</p>,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskedQuestions;
