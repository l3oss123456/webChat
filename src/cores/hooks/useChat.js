import { useState } from "react";

const useChat = () => {
  const [chat] = useState([]);

  const handleSubmit = (txt) => {
    if (txt === "") {
    } else {
      chat.push(txt);
    }
  };

  return { chat, handleSubmit };
};

export default useChat;
