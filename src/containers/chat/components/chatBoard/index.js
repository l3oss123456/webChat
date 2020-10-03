import React, { useContext, useEffect } from "react";
import { Input, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ChatContext } from "../../../../cores/hooks/index";
import {
  StyledBackgroundLayout,
  ScrollContainer,
  ChatContainer,
  StyledUl,
} from "../../css/index";

const ChatBoard = () => {
  const [form] = Form.useForm();
  const { message, handleSubmit } = useContext(ChatContext);
  console.log(message);
  return (
    <StyledBackgroundLayout>
      <ChatContainer>
        <ScrollContainer
          width={window.innerWidth - 600 + "px"}
          height={window.innerHeight - 350 + "px"}
          overflowy
        >
          <StyledUl>
            <li>Coffee : Hello</li>
            <li>Tea : Hi</li>
            <li>Milk : Hello</li>
            {/* {message.map((item) => {
              return <li>{item}</li>;
            })} */}
          </StyledUl>
        </ScrollContainer>
        <div>
          <Form form={form}>
            <Form.Item name="messageBox">
              <Input
                size="large"
                placeholder="Enter Message"
                prefix={<UserOutlined />}
                autoFocus
                onPressEnter={(e) => handleSubmit(e, form)}
              />
            </Form.Item>
          </Form>
        </div>
      </ChatContainer>
    </StyledBackgroundLayout>
  );
};
export default ChatBoard;
