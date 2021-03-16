import { Radio } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react';
import CarouselStart from '../StartPage/Carousel';
import DeliverySection from './DeliverySelection';


 
const RadioGroup = Radio.Group;

class PaymentMethod extends React.Component {
  state = {
    value: 1,
  };

 
  
  onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  creditCard (e: any) {
    if (e.target.value === 1) {
        console.log('Kort')
        return <DeliverySection/>
    }
  }   
swish (e: any) {
    if (e.target.value === 2) {
        console.log('Swish')
        return <h1>Hej</h1>
        
    }
}
klarna (e: any) {
    if (e.target.value === 3) {
        console.log('Klarna')
        return <CarouselStart />
    }
}
    

  render() {
    const { value } = this.state;
    return (
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
    );
  
  }
}
 

export default PaymentMethod;