"use client";
import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import Header from "@/components/Header/Header";
import DoctorCallTImeSchedule from "@/components/DoctorComponents/DoctorCallTImeSchedule";

const steps = [
  {
    title: "First",
    content: <DoctorCallTImeSchedule />,
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

function PaymentProcess() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Header />
      <div style={{ width: "70%", margin: "0 auto" }}>
        <Steps current={current} className="mt-10" items={items} />
        <div>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button
              className="hover:bg-[#008080]"
              style={{
                background: "#008080",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              style={{
                background: "#008080",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
                background: "#008080",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default PaymentProcess;
