import { Badge } from "antd";
import React, { Component } from "react";
import { CSSProperties } from "react";

interface State {
    quantity: number;
}
class AddToBadge extends Component  { 

    state: State = {
       quantity: 0
    }

    getBadgeQuantity() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        let quantity = (cartItems.map((item: any) => item.quantity).reduce((a: number, b: number) => a + b, 0)
            ); 
            return quantity;
    } 
        
    render() { 
        return (
                  <div>
                <Badge count={this.getBadgeQuantity()}  style={badgeStyle}>
                    <a href="#" className="head-example" />
                 </Badge>
                 </div> 
        )
    }              
}

const badgeStyle: CSSProperties = {
    background: 'red',
    color: 'white', 
    borderColor: 'red',
    fontSize: '0.8rem',
    marginRight:'3rem',
    marginTop: '-1rem'
}

export default AddToBadge;


