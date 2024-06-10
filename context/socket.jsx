"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { token: userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userToken) {
      return;
    }

    const connection = io(process.env.NEXT_PUBLIC_BACKEND_SOCKET_SERVER_URI, {
      auth: {
        token: userToken,
      },
      reconnection: true,
      reconnectionAttempts: 3,
      reconnectionDelay: 1000,
    });

    connection.on("connect", () => {
      setSocket(connection);
      console.log("Successfully connected with socket.io server");
    });

    connection.on("connect_error", (error) => {
      console.log("Error establishing connection", error);
    });
    // setSocket(connection);
    // Cleanup function
    return () => {
      connection.off("connect");
      connection.off("connect_error");
      connection.disconnect();
    };
  }, [userToken]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
