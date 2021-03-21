import { Row, Col, Button, Divider, Steps, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Component, ContextType, CSSProperties } from 'react';
import CartItemsList from './CartItemsList';
import DeliverySelection from './DeliverySelection';
import InformationForm from './InformationForm';
import PaymentMethod from './PaymentMethod';
import TotalPrice from './TotalPrice';
import { CartContext } from '../../contexts/CartContext';
import { Route } from 'react-router-dom';
import CompleteOrder from './CompleteOrder';

const { Step } = Steps;

const steps = [
  {
    title: 'Your information',
    content: 'First-content',
  },
  {
    title: 'Delivery',
    content: 'Second-content',
  },
  {
    title: 'Payment',
    content: 'Fourth-content',
  },
  {
    title: 'Complete order',
    content: 'Last-content',
  },
];

interface State {
    current: number;
}
class CartView extends Component<{}, State> { 
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    state: State = {
        current: 0
    }

    next = () => {
        this.setState({ current: this.state.current + 1});
    }

    prev = () => {
        this.setState({ current: this.state.current - 1});
    }

    render() {
        const { current } = this.state;
        const stepsComponents: any = {
            0: InformationForm,
            1: DeliverySelection,
            2: PaymentMethod,
            3: CompleteOrder,
        };
        const StepsComponent = stepsComponents[current];

        return(
            <CartContext.Consumer>
                {({ getTotalPriceProducts }) => {
                    return (
                        <Row style={cartViewContainerStyle}>
                            <CartItemsList />
                            <h3 style={priceTextStyle}>Price products: {getTotalPriceProducts()  + ' kr '}</h3>
                            <Steps current={this.state.current} style={{ marginTop: '7rem' }}>
                                {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <StepsComponent 
                                next={this.next} />
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    width: '80%',
    margin: 'auto'
}

const priceTextStyle: CSSProperties = {
    textAlign: 'center',
    marginTop: '1rem'
}
