import React from "react";
import { Image, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SendMessageModal from "./SendMessageModal";

const { Text } = Typography;

function UserCard({ searchedUser }) {
  const UserImage =
    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1713684051~exp=1713687651~hmac=db4d96f7de60251d4d710193e66a3d50594a3cb31c83948822e098cdfba0e093&w=740";

  return (
    <div className="overflow-hidden overflow-y-auto h-screen bg-white">
      {searchedUser && searchedUser.length > 0 ? (
        searchedUser.map((user, index) => (
          <div
            key={index}
            className="group flex flex-col border-b-2 cursor-pointer"
          >
            <div className="flex flex-1 flex-col">
              <div className="flex items-start p-4">
                <div className="flex items-start gap-4 text-sm">
                  {UserImage ? (
                    <Image
                      src={UserImage}
                      width={60}
                      height={60}
                      className="border"
                      style={{ borderRadius: "50%" }}
                      alt="User Image"
                    />
                  ) : (
                    <Avatar icon={<UserOutlined />} size={40} />
                  )}
                  <div className="grid gap-1">
                    <Text strong>{user.name}</Text>
                    <div className="flex items-center gap-2">
                      {user.online ? (
                        <>
                          {" "}
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <Text type="secondary">Active now</Text>
                        </>
                      ) : (
                        <>
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          <Text type="secondary">Offline now</Text>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <SendMessageModal user={user} />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No User Found</div>
      )}
    </div>
  );
}

export default UserCard;
