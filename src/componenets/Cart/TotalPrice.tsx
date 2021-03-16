import { Col, Row } from 'antd';
import { Component, CSSProperties } from 'react';

class TotalPrice extends Component {

    getTotalPrice() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        let totalPrice = cartItems.map((item: any) => item.product.price).reduce((a: number, b: number) => a + b, 0);
        return totalPrice;
    }

    render() {
        return(
            <Row style={totalPriceContainer}>
                <Col span={24}>
                    <h2>Total price: {this.getTotalPrice}</h2>
                </Col>
            </Row>
        )
    }
}

export default TotalPrice;

const totalPriceContainer: CSSProperties = {
    padding: '4rem'
}