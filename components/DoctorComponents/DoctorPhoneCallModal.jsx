"use client";
import { Button, Modal, Space } from "antd";
import React, { useState } from "react";
import "./DoctorComponents.css";
import DoctorCall from "./DoctorCall";
import DoctorPaymentForHelp from "./DoctorPaymentForHelp";
import { message, Steps } from "antd";
import DoctorCallTImeSchedule from "./DoctorCallTImeSchedule";

function DoctorPhoneCallModal({ data, open, setOpen }) {
  const [currentModalData, setCurrentModalData] = useState("schedule");
  const [timeSchedule, setTimeSchedule] = useState({});
  console.log(timeSchedule);

  const handleCancel = () => {
    setOpen(false);
  };
  const steps = [
    {
      title: "First",
      content: (
        <DoctorCallTImeSchedule
          timeSchedule={timeSchedule}
          setTimeSchedule={setTimeSchedule}
        />
      ),
    },
    {
      title: "Second",
      content: (
        <DoctorPaymentForHelp
          data={data}
          currentModalData={currentModalData}
          setCurrentModalData={setCurrentModalData}
        />
      ),
    },
    {
      title: "Last",
      content: <DoctorCall data={data} />,
    },
  ];
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
      <Modal
        open={open}
        // title="Title"
        centered
        onOk={false}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <Button>Custom Button</Button> */}
            {/* <CancelBtn /> */}
            {/* <OkBtn /> */}
          </>
        )}
      >
        <Steps current={current} className="mt-10" items={items} />
        <div>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button
              disabled={!timeSchedule?.price}
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
      </Modal>
    </>
  );
}

export default DoctorPhoneCallModal;
