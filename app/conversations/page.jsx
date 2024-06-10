"use client";
import React, { useEffect, useState } from "react";
import Conversation from "@/components/MessengerComponents/Conversation/Conversation";
import { useSocket } from "@/context/socket";
import { useSelector } from "react-redux";

import { currentUser } from "@/lib/redux/features/auth/AuthSlice";
import MessageBox from "@/components/MessengerComponents/Message/MessageBox";
import { Button, Input } from "antd";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversationId, setSelectedConversationId] = useState({});
  const navigate = useRouter();
  const user = useSelector(currentUser);

  const socket = useSocket();

  const isSocketConnected = socket?.connected;

  useEffect(() => {
    setTimeout(() => {
      if (socket && user && isSocketConnected) {
        socket.emit("getMyConversations", { userId: user.id });
        socket.on("getMyConversations", (data) => {
          setConversations(data);
        });
      }
    }, 1000);
  }, [user, socket, isSocketConnected]);

  const selectedChatDetails = (id, image) => {
    const data = { id, image };
    setSelectedConversationId(data);
  };

  const handleNavigation = () => {
    navigate.push("/");
  };

  return (
    <>
      <div className="w-[98%] mx-auto  rounded-[15px]">
        <div className="">
          <div className="grid grid-cols-12 ">
            <div className="md:col-span-4 col-span-4 bg-white rounded-lg my-4 border hidden md:block">
              <div className="flex justify-between items-center bg-white">
                <h3 className="text-2xl text-gray-600 font-medium p-6 uppercase">
                  Chats
                </h3>
                <Input placeholder="Search" className="w-3/4 rounded-lg m-4" />
                <div className="text-2xl text-gray-500 p-3">
                  <Button
                    onClick={() => handleNavigation()}
                    className="flex justify-center items-center gap-1"
                  >
                    HOME
                    <Home size={18} />
                  </Button>
                </div>
              </div>

              <Conversation
                conversations={conversations}
                selectedChatDetails={selectedChatDetails}
              />
            </div>
            <div className="md:col-span-8 col-span-12 bg-white ">
              <MessageBox selectedConversationId={selectedConversationId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
