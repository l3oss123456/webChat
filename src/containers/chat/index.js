import React from "react";
import { ChatProvider } from "../../cores/hooks/index";
import ChatBoard from "./components/chatBoard/index";

const Chat = () => {
  return (
    <ChatProvider>
      <ChatBoard />
    </ChatProvider>
  );
};
export default Chat;
