import { Col, Row } from 'antd';
import { Component, CSSProperties } from 'react';

class TotalPrice extends Component {

    render() {
        return(
            <Row style={totalPriceContainer}>
                <Col span={24}>
                    <h2>Total price:</h2>
                </Col>
            </Row>
        )
    }
}

export default TotalPrice;

const totalPriceContainer: CSSProperties = {
    padding: '4rem'
}