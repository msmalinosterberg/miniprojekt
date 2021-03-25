import { Button, Radio, Row } from 'antd';
import { Component, ContextType, CSSProperties } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { calculateDeliveryDay, DeliveryMethod, deliveryMethods } from '../deliveryMethods';
interface Props {
  next(): void;
}
class DeliverySection extends Component<Props> {
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
      <Row style={deliveryContainer}>
          <h2>
              Delivery
          </h2>
          <Radio.Group options={this.mapMethodToRadio()} onChange={this.onChange} value={value} />
          <br/>
          <Button type="primary" style={buttonStyle} onClick={this.props.next}>
            Next
          </Button>
      </Row>
    );
  }
}

export default DeliverySection;

const deliveryContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  margin: 'auto',
  paddingTop: '3rem',
  paddingBottom: '3rem'
}

const buttonStyle: CSSProperties = {
  marginTop: '3rem',
  width: '4rem'
}