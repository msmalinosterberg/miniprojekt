import { Result, Button, Row } from 'antd';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reciept from '../OrderSuccess/Reciept';

function OrderSuccessMessage() {
    return (
        <Row style={containerStyle}>
            <Result
                status="success"
                title="You successfully purchased from FashionStore"
                subTitle={'Your order number is: ' + Math.floor(Math.random() * 1000000000000)}
                extra={[
                <Link to='/'>
                    <Button type="primary" key="console">Continue shopping</Button>
                </Link>
                ]}
            />
            <Reciept />
        </Row>
    ) 
}

export default OrderSuccessMessage; 

const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
}