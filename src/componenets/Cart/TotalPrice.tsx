import { Col, Row } from 'antd';
import { Component, ContextType, CSSProperties } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface State {
    totalPrice: number;
}

class TotalPrice extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    // state: State = {
    //     totalPrice: 0
    // }

    // getTotalPrice() {
    //     let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
    //     let totalPrice = (
    //         cartItems
    //         .map((item: any) => item.product.price * item.quantity)
    //         .reduce((a: number, b: number) => a + b, 0)
    //     );
    //     return totalPrice;
    // }

    render() {
        const { getTotalPrice } = this.context;
        return(
            <Row style={totalPriceContainer}>
                <Col span={24}>
                    <h2>Total price: <span style={priceStyle}>{getTotalPrice() + ' kr'}</span></h2>
                </Col>
            </Row>
        )
    }
}

export default TotalPrice;

const totalPriceContainer: CSSProperties = {
    padding: '4rem'
}

const priceStyle: CSSProperties = {
    fontWeight: 'bold',
    color: 'red'
}