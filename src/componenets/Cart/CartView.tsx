import { Steps, Row, Col } from 'antd';
import { Component, CSSProperties } from 'react';
import CartItemsList from './CartItemsList';
import InformationForm from './InformationForm';

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
                        <Step title="Step 2" description={'Delivery Selection goes here'} />
                        <Step title="Step 3" description={'Payment method goes here'} />
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