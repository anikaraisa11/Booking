import { SocketProvider } from "@/context/socket";

const ChatLayout = ({ children }) => {
  return (
    <div>
      <SocketProvider>{children}</SocketProvider>
    </div>
  );
};

export default ChatLayout;
