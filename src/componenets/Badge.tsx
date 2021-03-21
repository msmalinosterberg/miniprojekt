import { Badge } from "antd";
import { Component, ContextType } from "react";
import { CSSProperties } from "react";
import { CartContext } from "../contexts/CartContext";
class AddToBadge extends Component  { 
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
 
    render() { 
        return (
            <CartContext.Consumer>
                {({ getBadgeQuantity }) => {
                    return (
                        <div>
                            <Badge count={getBadgeQuantity()} style={badgeStyle}>
                                <a href="#" className="head-example" />
                            </Badge>
                        </div>
                    )
                }}
            </CartContext.Consumer>
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


