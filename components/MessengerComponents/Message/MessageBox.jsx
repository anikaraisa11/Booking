"use client";
import { Button, Input, Typography } from "antd";
import { VideoCameraOutlined, PaperClipOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "@/context/socket";
import WelcomeMessage from "./WelcomeMessage";
import Image from "next/image";
const { Text } = Typography;

export default function MessageBox({ selectedConversationId }) {
  const { id, image } = selectedConversationId;

  const [conversationHistory, setConversationHistory] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const socket = useSocket();
  const isSocketConnected = socket?.connected;
  const user = useSelector((state) => state.auth.user);
  const [messageInput, setMessageInput] = useState("");
  const chatRef = useRef(null);
  const UserImage =
    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1713684051~exp=1713687651~hmac=db4d96f7de60251d4d710193e66a3d50594a3cb31c83948822e098cdfba0e093&w=740";

  useEffect(() => {
    if (socket && user && isSocketConnected && id) {
      socket.emit("getConversationHistory", {
        conversationId: id,
        userId: user.id,
      });

      socket.on("getConversationHistory", (conversations) => {
        setConversationHistory(conversations);
        setAllMessages(conversations.messages);
      });

      socket.on(`newMessage-${conversationHistory.id}`, (message) => {
        setAllMessages((prevHistory) => [...prevHistory, message]);
      });
    }

    return () => {
      if (socket) {
        socket.off("getConversationHistory");
        socket.off(`newMessage-${conversationHistory.id}`);
      }
    };
  }, [socket, id]);

  // Scroll to bottom whenever allMessages changes
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [allMessages]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      content: messageInput.trim(),
      receiverUserId: conversationHistory.participant.id,
    };

    socket.emit("sendMessage", { ...newMessage });

    // Clear message input
    setMessageInput("");
  };

  return (
    <div>
      {id && allMessages ? (
        <div className="w-full">
          {/* Header */}
          <div className="flex justify-between items-center space-x-4 w-[98%]">
            {/* Profile Info */}
            <div className="flex items-center space-x-3 mt-3 mx-4">
              {image === null ? (
                // <Avatar icon={<UserOutlined />} size={40} />
                <Image
                  src={UserImage}
                  width={60}
                  height={60}
                  className="border"
                  style={{ borderRadius: "50%" }}
                  alt="User Image"
                />
              ) : (
                <Image
                  src={image}
                  width={60}
                  height={60}
                  className="border rounded-full h-11 w-11 object-cover"
                  alt="User Image"
                />
              )}
              <div className="grid gap-0.5 text-sm">
                <div className="font-medium">
                  {conversationHistory?.participant?.name}
                  {conversationHistory?.participant?.active_now_status ? (
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500 mb-[2.2px]" />
                      <Text
                        type="secondary"
                        className="uppercase text-[10px] font-bold"
                      >
                        Active
                      </Text>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500 mb-[2.2px]" />
                      <Text
                        type="secondary"
                        className="uppercase text-[10px] font-bold"
                      >
                        Offline
                      </Text>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="uppercase"
                size="small"
                shape="round"
                icon={<VideoCameraOutlined />}
              >
                Book Appointment
              </Button>
            </div>
          </div>
          {/* Chat Area */}
          <div className="p-4 flex items-center justify-center">
            <div
              ref={chatRef} // Add ref here
              className="text-sm text-gray-500 dark:text-gray-400 bg-slate-100 w-full rounded-lg p-4 overflow-hidden overflow-y-scroll h-[75vh]"
            >
              {allMessages?.map((message) => {
                return (
                  <div
                    key={message.id}
                    className={`${
                      message?.authorId === user?.id
                        ? "justify-end"
                        : "justify-start"
                    } flex mb-2`}
                  >
                    <div
                      className={`${
                        message?.authorId === user?.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      } rounded-lg p-2 max-w-[70%]`}
                    >
                      {message?.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Message Input */}
          <div className="p-4 flex items-center">
            <form className="flex gap-2 flex-1" onSubmit={handleMessageSubmit}>
              <Input
                className="flex-1"
                placeholder="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button
                shape="circle"
                icon={<PaperClipOutlined />}
                className="w-8 h-8"
              />
              <Button htmlType="submit">Send message</Button>
            </form>
          </div>
        </div>
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
}
