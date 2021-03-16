import { Badge, Col, Row } from "antd";
import React, { Component } from "react";
import { CSSProperties } from "react";



interface State {
    quantity: number;
}

class AddToBadge extends Component <State> { 

    state: State = {
       quantity: 0
    }

    getBadgeQuantity() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        let quantity = (cartItems
            .map((item: any) => item.quantity)
            .reduce((a: number, b: number) => a + b, 0)
            ); 
            return quantity;

    } 
        
    render() { 
        return (
            <Row>
                <Col span={24}>
                <Badge count={0} showZero style={badgeStyle}>
                    <a href="#" className="head-example" />
                 </Badge>
                </Col>
            </Row>
           
        )
    }              
}

const badgeStyle: CSSProperties = {
    background: 'red',

}

export default AddToBadge;


