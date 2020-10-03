import React, { useContext } from "react";
import { Input, Button, Form } from "antd";
import { HomeContext } from "../../../../cores/hooks/index";

const FormName = () => {
  const { handleSubmit } = useContext(HomeContext);
  const [form] = Form.useForm();
  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please Enter your name !",
            },
          ]}
        >
          <Input autoFocus onPressEnter={() => handleSubmit(form)} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 8,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleSubmit(form)}
          >
            Get Start
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormName;
