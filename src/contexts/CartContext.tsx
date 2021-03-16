import { Component, createContext } from 'react';
import { CartItem } from '../componenets/Cart/CartItemsList';
import { DeliveryMethod } from '../componenets/Cart/DeliverySelection';
import { Product } from '../componenets/ProductItemsList';

interface State {
    cart: CartItem[];
    deliveryMethod: DeliveryMethod | undefined;
}

interface ContextValue extends State {
    addProductToCart: (product: Product, quantity: number | undefined) => void;
    setDeliveryMethod: (method: DeliveryMethod) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    deliveryMethod: undefined,
    addProductToCart: () => {},
    setDeliveryMethod: () => {},
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: [],
        deliveryMethod: undefined,
    }

    componentDidMount() {
        this.setState({ cart: JSON.parse(localStorage.getItem('cartItems') as string) || []});
    }

    addProductToCart = (product: Product, quantity: number | undefined) => {
        let cartItems = this.state.cart;
        const existingCartItem = cartItems.filter((item: CartItem) => item.product.id === product.id);
        if (existingCartItem.length === 0) {
            const cartItem = {product: product, quantity: 1};
            cartItems.push(cartItem);
        } else if (quantity) {
            const cartItem = {product: product, quantity: quantity};
            cartItems = cartItems.map((item: CartItem) => item.product.id === product.id ? cartItem : item);
        } else {
            const cartItem = {product: product, quantity: existingCartItem[0].quantity + 1};
            cartItems = cartItems.filter((item: CartItem) => item.product.id !== product.id);
            cartItems.push(cartItem);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.setState({ cart: cartItems });
        return cartItems;
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
                addProductToCart: this.addProductToCart,
                setDeliveryMethod: this.setDeliveryMethod
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;