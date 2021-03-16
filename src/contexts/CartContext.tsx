import { Component, createContext } from 'react';
import { CartItem } from '../componenets/Cart/CartItemsList';

interface State {
    cart: CartItem[]
}

interface ContextValue extends State {
    addToCart: (product: string) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {}
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: []
    }

    addProductToCart = (product: CartItem) => {
        const updatedCart = [...this.state.cart, product];
        this.setState({ cart: updatedCart });
    }

    render() {
        console.log('CONTEXT RENDER');
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;