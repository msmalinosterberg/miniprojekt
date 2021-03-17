import { Result, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';



function OrderSuccessMessage() {

    let orderNumber = Math.floor(Math.random() * 10256763258); 



    return (
        <Result
                status="success"
                title="You successfully purchased from FashionStore"
                subTitle={"Order number:" + orderNumber}
                extra={[
                <Link to='/'><Button type="primary" key="console" >Continue shopping  </Button></Link>
               
            ]}
        />
    ) 
}

export default OrderSuccessMessage; 