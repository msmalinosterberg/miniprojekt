import { Component, ContextType } from 'react';
import { Card } from 'antd';
import { CartContext } from '../../contexts/CartContext';
export interface IReceipt {
    products: string[];
    deliveryMethod: string;
    totalPrice: number;
    paymentMethod: string;
}

class Receipt extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
    
    render() {
        return(
            <CartContext.Consumer>
                {({ receipt }) => {
                console.log(receipt)
                    return (
                        <Card title="Reciept" style={{ width: '60%' }}>
                            <p>Products: {receipt.products}</p>
                            <p>Delivery: {receipt.deliveryMethod}</p>
                            <p>Total price: {receipt.totalPrice + ' kr, incl delivery and VAT'}</p>
                            <p>Payed with: {receipt.paymentMethod}</p>
                        </Card>
                    );    
                }}
          </CartContext.Consumer>
        )
    }
}

export default Receipt;