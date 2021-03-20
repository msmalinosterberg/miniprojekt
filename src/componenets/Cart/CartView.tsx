import { Steps, Row, Col, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Component, ContextType, CSSProperties } from 'react';
import CartItemsList from './CartItemsList';
import DeliverySelection from './DeliverySelection';
import InformationForm from './InformationForm';
import PaymentMethod from './PaymentMethod';
import TotalPrice from './TotalPrice';
import { CartContext } from '../../contexts/CartContext';
import { Route } from 'react-router-dom';

interface State {
    currentStep?: number;
}

const { Step } = Steps;
class CartView extends Component<State> { 
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
    
    state: State = {
        currentStep: 0,
    };
    
    onChange = (current: State) => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    onPlaceOrderClick = (history: any) => {
        const { handlePlaceOrder } = this.context;
        handlePlaceOrder(history);
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
                </Col>
                <Col span={24} style={buttonContainerStyle}>
                    <Route render={({ history }) => (
                        <Button
                            type="primary"
                            icon={<CheckCircleOutlined />}
                            size={'large'}
                            onClick={() => this.onPlaceOrderClick(history)}
                        >
                            <strong> Place order</strong>
                        </Button>
                    )}/>
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

const buttonContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-3rem',
    marginBottom: '8rem'
}