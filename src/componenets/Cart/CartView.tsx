import { Steps, Row, Col, Button, Divider } from 'antd';
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
 
}

class CartView extends Component<State> { 
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
    
    
    onChange = (current: State) => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    onPlaceOrderClick = (history: any) => {
        const { handlePlaceOrder } = this.context;
        handlePlaceOrder(history);
    }

    render() {
        return(
            <CartContext.Consumer>
                {({ disablePlaceOrderButton }) => {
                    return (
                        <Row style={cartViewContainerStyle}>
                            <Col span={24} style={columnStyle}>
                                <CartItemsList/>
                                <Divider />
                                <InformationForm /> 
                                <Divider />
                                <DeliverySelection />
                                <Divider />
                                <TotalPrice />
                                <Divider />
                                <PaymentMethod />
                            </Col>
                            <Col span={24} style={buttonContainerStyle}>
                                <Route render={({ history }) => (
                                    <Button
                                        type="primary"
                                        icon={<CheckCircleOutlined />}
                                        size={'large'}
                                        onClick={() => this.onPlaceOrderClick(history)}
                                        loading={disablePlaceOrderButton}
                                    >
                                        <strong> Place order</strong>
                                    </Button>
                                )}/>
                            </Col>
                        </Row>
                    );    
                }}
            </CartContext.Consumer>
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