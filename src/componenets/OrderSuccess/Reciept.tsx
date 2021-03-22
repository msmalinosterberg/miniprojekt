import { Component, ContextType } from 'react';
import { Card } from 'antd';
import { CartContext, PaymentMethod } from '../../contexts/CartContext';
import { UserInfo } from '../Cart/InformationForm';
import { CartItem } from '../Cart/CartItemsList';

export interface IReceipt {
    cart: CartItem[];
    deliveryMethod: string;
    totalPrice: number;
    paymentMethod: PaymentMethod;
    userInfo: UserInfo;
}
class Receipt extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
    
    render() {
        return(
            <CartContext.Consumer>
                {({ receipt }) => {
                    return (
                        <Card title="Receipt" style={{ width: '60%' }}>
                            <p>Products: {receipt.cart.map((item) => item.quantity + ' ' + item.product.title.concat(', '))}</p>
                            <p>Delivery: {receipt.deliveryMethod}</p>
                            <p>Total price: {receipt.totalPrice + ' kr, incl delivery and VAT'}</p>
                        </Card>
                    );    
                }}
          </CartContext.Consumer>
        )
    }
}

export default Receipt;