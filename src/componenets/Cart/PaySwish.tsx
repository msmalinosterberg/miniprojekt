import { Component, ContextType, CSSProperties } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { CartContext } from '../../contexts/CartContext';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
  
const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
export interface PaymentSwish {
  phone: string;
}
interface Props {
  next(): void;
}
class PaySwish extends Component<Props> {
  context!: ContextType<typeof CartContext>
  static contextType = CartContext;

  onValuesChange = (values: any, allValues: any) => {
    const { updatePaymentInfo } = this.context;
    updatePaymentInfo(allValues.swish);
  };

  onFieldsChange = (values: any, allValues: any) => {
    console.log(allValues);
    const { updatePaymentInfo } = this.context;
    updatePaymentInfo(allValues.swish);
  }

  onFinish = (values: any) => {
    console.log('Success:', values);
    this.props.next();
  };

  render() {
      return (
        <CartContext.Consumer>
              {({ userInfo }) => {
                return (
                  <Row style={formContainerStyle}>
                    <Col span={24} style={columnStyle}>
                        <h2>Payment information</h2>
                        <Form {...layout} 
                          name="nest-messages" 
                          onFieldsChange={this.onFieldsChange} 
                          validateMessages={validateMessages}
                          onFinish={this.onFinish}>
                    
                        <Form.Item name={['swish', 'phone']} label="Phone" 
                            rules={[{ min: 10, max: 10, required: true }]} shouldUpdate>
                            <Input defaultValue={userInfo?.phone}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2}}>
                          <Button type="primary" htmlType="submit">
                            Next
                          </Button>
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