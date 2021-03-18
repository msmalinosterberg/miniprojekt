import { Steps, Row, Col, Button } from 'antd';
import { Component, CSSProperties } from 'react';
import OrderSuccessMessage from '../OrderSuccess/OrderSuccessMessage';
import CartItemsList from './CartItemsList';
import DeliverySelection from './DeliverySelection';
import InformationForm from './InformationForm';
import PaymentMethod from './PaymentMethod';
import TotalPrice from './TotalPrice';

//Place order function state, utloggningen av info sker i promisebaserade funktionen

interface State {
    currentStep?: number;
}

const { Step } = Steps;
class CartView extends Component<State> { 
    state: State = {
        currentStep: 0,
      };
    
      onChange = (current: State) => {
        console.log('onChange:', current);
        this.setState({ current });
      };
    
    handlePlaceOrder() {

      }

    render() {
        const { currentStep } = this.state;
        return(
            <Row style={cartViewContainerStyle}>
                <Col span={24} style={columnStyle}>
                    <CartItemsList/>
                    <Steps current={currentStep} onChange={() => this.onChange} direction="vertical">
                        <Step title="Step 1" description={<InformationForm />} /> 
                        <Step title="Step 2" description={<DeliverySelection />} />
                        <Step title="Step 3" description={<TotalPrice />} />
                        <Step title="Step 4" description={<PaymentMethod />} />
                    </Steps>
                    <Button type="primary" onClick={() => this.handlePlaceOrder}><strong>Place order</strong></Button>
                    <OrderSuccessMessage />
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