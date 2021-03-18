import React, { Component, CSSProperties } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  export interface PaymentKlarna {
    ssn: string;
    name: string;
    email: string;
    phone: string;
    street: string;
    zipcode: string;
    city: string;
  }

class PayKlarna extends Component {
    onFinish = (values: any) => {
        console.log(values);
      };
    render() {
        return (
          <Row style={formContainerStyle}>
            <Col span={24} style={columnStyle}>
            <h2>Billing information</h2>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                <Form.Item name={['klarna', 'ssn']} label="SSN" 
                    rules={[{ min: 10, max: 10, required: true }]}>
                    <Input placeholder="YYMMDDXXXX"/>
                </Form.Item>
                <Form.Item name={['klarna', 'name']} label="Name" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['klarna', 'email']} label="Email" 
                    rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['klarna', 'phone']} label="Phone" 
                    rules={[{ min: 10, max: 10, required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['klarna', 'steet']} label="Street" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['klarna', 'zipcode']} label="Zip-code" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['klarna', 'city']} label="City" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2}}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        );
    }
}

export default PayKlarna;

const formContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    width: '80%',
    margin: 'auto'
}
const columnStyle: CSSProperties = {
    marginTop: '3rem',
    marginBottom: '3rem',
}