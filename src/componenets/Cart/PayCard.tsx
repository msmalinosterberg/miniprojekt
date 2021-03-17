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
  
  

class PayCard extends Component {
    onFinish = (values: any) => {
        console.log(values);
      };
    render() {
        return (
            <Row style={formContainerStyle}>
            <Col span={24} style={columnStyle}>
              <h2>Card details</h2>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                <Form.Item style={formStyle} name={['user', 'cardno']} label="Card number"  
                    rules={[{ min: 13, max: 19, required: true }]}>
                    <Input placeholder="XXXX XXXX XXXX XXXX"/>
                </Form.Item>
                <Form.Item style={formStyle} name={['user', 'expdate']} label="Expiry date" 
                    rules={[{ required: true }]}>
                    <Input placeholder="MM/YY"/>
                </Form.Item>
                <Form.Item style={formStyle} name={['user', 'name']} label="Name on card" 
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item style={formStyle} name={['user', 'cv']} label="CVC/CCV" 
                    rules={[{ required: true }]}>
                    <Input placeholder="e.g. 123"/>
                </Form.Item>
                <Form.Item style={formStyle} wrapperCol={{ ...layout.wrapperCol, offset: 2}}>
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

export default PayCard;

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
const formStyle: CSSProperties = {
    display: 'flex',
}