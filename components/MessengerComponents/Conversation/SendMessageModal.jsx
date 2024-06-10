import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { useSocket } from "@/context/socket";

const SendMessageModal = ({ user }) => {
  const socket = useSocket();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);

    const newMessage = {
      content: "Hi",
      receiverUserId: user._id,
    };

    // Emit a message event to send the message to the server
    socket.emit("sendMessage", {
      ...newMessage,
    });

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      window.location.reload();
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        size="small"
        shape="round"
        icon={<MessageOutlined />}
      >
        Say Hi 👋
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default SendMessageModal;
