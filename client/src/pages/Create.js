import React from 'react';
import { Form, Input, Button } from 'antd';


function Create() {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nmae"
        name="name"
        rules={[{ required: true, message: 'Please input Fund name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="URL"
        name="url"
        rules={[{ required: true, message: 'Please input about the fund detail url!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input Fund description!' }]}
      >
        <TextArea rows={4} placeholder="maxLength is 20" maxLength={20} />
      </Form.Item>  
      <Form.Item
        label="Beneficiary Adrress"
        name="beneficiary"
        rules={[{ required: true, message: 'Please input about the fund\'s beneficiary!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Create;