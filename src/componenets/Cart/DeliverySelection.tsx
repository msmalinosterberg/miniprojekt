import { Radio } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { ContextType, CSSProperties } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { calculateDeliveryDay, DeliveryMethod, deliveryMethods } from '../deliveryMethods';


const RadioGroup = Radio.Group;
class DeliverySection extends React.Component {
  context!: ContextType<typeof CartContext>
  static contextType = CartContext;

  state = {
    value: 1,
  };
  
  onChange = (e: any) => {
    const { setDeliveryMethod } = this.context;
    this.setState({
      value: e.target.value,
    });
    const method = deliveryMethods.filter((item: DeliveryMethod) => item.id === e.target.value)[0];
    setDeliveryMethod(method);
  };

  mapMethodToRadio() {
    return deliveryMethods.map(
      (item: DeliveryMethod) => (
        {label: item.company + ' will deliver on ' + calculateDeliveryDay(item.time) + ' – ' + item.price + ' kr ', value: item.id}))
  }

  render() {
    const { value } = this.state;
    
    return (
      <Content style={contentStyle}>
          <h2>
              Delivery
          </h2>
          <Radio.Group options={this.mapMethodToRadio()} onChange={this.onChange} value={value} />
      </Content>
    );
  }
}

export default DeliverySection;

const contentStyle: CSSProperties = {
  padding: '4rem'
}