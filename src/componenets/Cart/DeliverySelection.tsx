import { Radio } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react';

interface State {
        value?: any;
  }
 
const RadioGroup = Radio.Group;

class DeliverySection extends React.Component<State> {
  state: State = {
    value: {}
  }
  
  onChange = (e: { target: { value: any; }; }) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }    

  render() {
    return (
        <Content>
            <h2>
                Delivery
            </h2>
            <RadioGroup onChange={() => this.onChange} value={this.state.value}>
                <Radio value={1}>Postnord, <strong>24h - 145 kr</strong></Radio>
                <Radio value={2}>Bring, <strong>48h - 129 kr</strong></Radio>
                <Radio value={3}>DB Schenker, <strong>72h - 89 kr</strong></Radio>
            </RadioGroup>
        </Content>
    );
  }
}

export default DeliverySection;