import React, { useState, useEffect, createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [message, setMessage] = useState([]);

  const handleSubmit = (e, form) => {
    e.preventDefault();
    if (e.target.value !== "") {
      let msg = message;
      msg.push(e.target.value);
      setMessage(msg);
      form.resetFields();
    }
  };
  return (
    <ChatContext.Provider
      value={{
        message,
        handleSubmit,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
