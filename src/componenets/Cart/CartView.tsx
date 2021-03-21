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
    title: 'Total price',
    content: 'Third-content',
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
            2: TotalPrice,
            3: PaymentMethod,
            4: CompleteOrder,
        };
        const StepsComponent = stepsComponents[current];

        return(
            <CartContext.Consumer>
                {({ disablePlaceOrderButton }) => {
                    return (
                        <Row style={cartViewContainerStyle}>
                            <CartItemsList/>
                            <Steps current={this.state.current} style={{ marginTop: '7rem' }}>
                                {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <StepsComponent 
                                next={this.next} />
                            {/* <div className="steps-action">
                                {this.state.current < steps.length - 1 && (
                                    <Col span={24}>
                                        <Button type="primary" onClick={() => this.next()}>
                                            Next
                                        </Button>
                                    </Col>
                                )}
                                {this.state.current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                                )}
                                {this.state.current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                                )}
                            </div> */}
                            
                            {/* {/* <Col span={24} style={columnStyle}>
                                <CartItemsList/>
                                <Divider />
                                <InformationForm /> 
                                <Divider />
                                <DeliverySelection />
                                <Divider />
                                <TotalPrice />
                                <Divider />
                                <PaymentMethod />
                            </Col> */}
                            
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

const columnStyle: CSSProperties = {
    marginTop: '3rem',
    marginBottom: '3rem',
}

