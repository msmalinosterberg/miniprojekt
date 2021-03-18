import React, { Component, ContextType, CSSProperties } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { CartContext } from '../../contexts/CartContext';
// import InformationForm from 'InformationForm.tsx'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  export interface PaymentSwish {
    phone: string;
  }
class PaySwish extends Component {
  context!: ContextType<typeof CartContext>
  static contextType = CartContext;

  onValuesChange = (values: any, allValues: any) => {
      //console.log(allValues);
      const { updatePaymentInfo } = this.context;
      updatePaymentInfo(allValues.swish);
    };
    
    render() {
        return (
          <CartContext.Consumer>
                {({ userInfo }) => {
                  return (
                    <Row style={formContainerStyle}>
                      <Col span={24} style={columnStyle}>
                          <h2>Payment information</h2>
                          <Form {...layout} name="nest-messages" onValuesChange={this.onValuesChange} validateMessages={validateMessages}>
                      
                          <Form.Item name={['swish', 'phone']} label="Phone" 
                              rules={[{ min: 10, max: 10, required: true }]}>
                              <Input defaultValue={userInfo?.phone}/>
                          </Form.Item>
                          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2}}>
                              {/* <Button type="primary" htmlType="submit">
                              Submit
                              </Button> */}
                          </Form.Item>
                          </Form>
                      </Col>
                  </Row>
                  );
                  
                }}
          </CartContext.Consumer>
        )
    }
}

export default PaySwish;

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