"use client";
import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
import Image from "next/image";
import moment from "moment";
import { UserImage } from "@/constants/image";

export default function ConversationCard({
  conversation,
  selectedChatDetails,
}) {
  return (
    <div
      onClick={() =>
        selectedChatDetails(conversation.id, conversation.participant.image)
      }
      className="group flex flex-col border-b-2 cursor-pointer"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            {conversation.participant.image === null ? (
              // <Avatar icon={<UserOutlined />} size={40} />
              <Image
                src={UserImage}
                width={60}
                height={60}
                className="border"
                style={{
                  borderRadius: "50%",
                }}
                alt="User Image"
              />
            ) : (
              <Image
                src={conversation.participant.image}
                width={60}
                height={60}
                className="border rounded-full h-14 w-14 object-cover"
                alt="User Image"
              />
            )}
            <div className="grid gap-1">
              <div className="grid">
                <Text strong>{conversation.participant.name}</Text>
              </div>
              <div className="flex items-center gap-2">
                {conversation.participant.active_now_status ? (
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
          <Text
            type="secondary"
            style={{ marginLeft: "auto", fontSize: "10px" }}
          >
            {moment(conversation.updatedAt).format("MMM DD, YYYY h:mm A")}
          </Text>
        </div>
      </div>
    </div>
  );
}
