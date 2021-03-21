import { Radio } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react';
import PayCard from './PayCard';
import PayKlarna from './PayKlarna';
import PaySwish from './PaySwish';

const RadioGroup = Radio.Group;
class PaymentMethod extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  };

  creditCard (e: any) { }   
  swish (e: any) { }
  klarna (e: any) { }
      
  render() {
    const { value } = this.state;
    const paymentComponents: any = {
      1: PayCard,
      2: PaySwish,
      3: PayKlarna,
    };
    const PaymentComponent = paymentComponents[value];
    
    return(
      <Content style={paymentContainerStyle}>
        <h2>Payment</h2>
        <RadioGroup onChange={this.onChange} value={value}>
            <Radio onChange={this.creditCard} value={1}>Credit card</Radio>
            <Radio onChange={this.swish} value={2}>Swish</Radio>
            <Radio onChange={this.klarna} value={3}>Klarna</Radio>
        </RadioGroup>
        <div>
          <PaymentComponent/>
        </div> 
      </Content>
    )  
  }
}
 
export default PaymentMethod;

const paymentContainerStyle: CSSProperties = {
  padding: '4rem',
}