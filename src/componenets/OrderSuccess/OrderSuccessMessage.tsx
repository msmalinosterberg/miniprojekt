import { Result, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessMessage() {

    return (
        <Result
                status="success"
                title="You successfully purchased from FashionStore"
                subTitle="Order number: 20171828029"
                extra={[
                <Link to='/'><Button type="primary" key="console">Continue shopping </Button></Link>
            ]}
        />
    ) 
}

export default OrderSuccessMessage; 