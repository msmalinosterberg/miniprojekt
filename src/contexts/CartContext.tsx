import { Component, createContext } from 'react';
import { CartItem } from '../componenets/Cart/CartItemsList';
import { DeliveryMethod } from '../componenets/Cart/DeliverySelection';
import { Product } from '../componenets/ProductItemsList';


interface State {
    cart: CartItem[];
    deliveryMethod: DeliveryMethod | undefined;
}

interface ContextValue extends State {
    saveToCart: (product: Product) => void;
    setDeliveryMethod: (method: DeliveryMethod) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    deliveryMethod: undefined,
    saveToCart: () => {},
    setDeliveryMethod: () => {},
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: [],
        deliveryMethod: undefined,
    }

    addProductToCart = (product: Product) => {
        //const updatedCart = [...this.state.cart, product];
        //this.setState({ cart: updatedCart });
    }

    setDeliveryMethod = (method: DeliveryMethod) => {
        this.setState({ deliveryMethod: method });
    } 

    getTotalPrice = () => {
        
    }

    render() {
        console.log(this.state);
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                deliveryMethod: this.state.deliveryMethod,
                saveToCart: this.addProductToCart,
                setDeliveryMethod: this.setDeliveryMethod
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;