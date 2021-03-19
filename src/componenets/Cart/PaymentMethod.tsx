import { Radio } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import PayCard from './PayCard';
import PayKlarna from './PayKlarna';
import PaySwish from './PaySwish';

const RadioGroup = Radio.Group;
class PaymentMethod extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e: any) => {
    //console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  creditCard (e: any) { }   
  swish (e: any) { }
  klarna (e: any) { }
      
  render() {
    const { value } = this.state;
      if (value === 1) {
        return(
          <div>
            <Content>
              <h2>
                  Payment
              </h2>
              <RadioGroup onChange={this.onChange} value={value}>
                  <Radio onChange={this.creditCard} value={1}>Credit card</Radio>
                  <Radio onChange={this.swish} value={2}>Swish</Radio>
                  <Radio onChange={this.klarna} value={3}>Klarna</Radio>
              </RadioGroup>
            </Content>
            <PayCard/>
          </div>
        )     
      }
      if (value === 2) {
        return    (
          <div>
            <Content>
              <h2>
                  Payment
              </h2>
              <RadioGroup onChange={this.onChange} value={value}>
                  <Radio onChange={this.creditCard} value={1}>Credit card</Radio>
                  <Radio onChange={this.swish} value={2}>Swish</Radio>
                  <Radio onChange={this.klarna} value={3}>Klarna</Radio>
              </RadioGroup>
            </Content>
            <PaySwish/>
          </div>
        )     
      }
      if (value === 3) {
        return    (
          <div>
            <Content>
              <h2>
                  Payment
              </h2>
              <RadioGroup onChange={this.onChange} value={value}>
                  <Radio onChange={this.creditCard} value={1}>Credit card</Radio>
                  <Radio onChange={this.swish} value={2}>Swish</Radio>
                  <Radio onChange={this.klarna} value={3}>Klarna</Radio>
              </RadioGroup>
            </Content>
            <PayKlarna/>
          </div>
        )     
      }  
  }
}
 
export default PaymentMethod;