import { Steps, Row, Col } from 'antd';
import React, { Component, CSSProperties } from 'react';
import CartItemsList from './CartItemsList';
import DeliverySelection from './DeliverySelection';
import InformationForm from './InformationForm';
import TotalPrice from './TotalPrice';

interface State {
    current?: number;
}

const { Step } = Steps;
class CartView extends Component<State> { 
    state: State = {
        current: 0,
      };
    
      onChange = (current: State) => {
        console.log('onChange:', current);
        this.setState({ current });
      };
    
    
    render() {

        const { current } = this.state;

        return(
            <Row style={cartViewContainerStyle}>
                <Col span={24} style={columnStyle}>
                    <CartItemsList/>
                    <Steps current={current} onChange={() => this.onChange} direction="vertical">
                        <Step title="Step 1" description={<InformationForm />} /> 
                        <Step title="Step 2" description={<DeliverySelection />} />
                        <Step title="Step 3" description={<TotalPrice />} />
                        <Step title="Step 4" description={'Payment method'} />
                    </Steps>
                </Col>
            </Row>
        )
    }
}

export default CartView;

const cartViewContainerStyle: CSSProperties = {
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