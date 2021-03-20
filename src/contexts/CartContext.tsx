import { Component, createContext } from 'react';
import { CartItem } from '../componenets/Cart/CartItemsList';
import { UserInfo } from '../componenets/Cart/InformationForm';
import { PaymentCard } from '../componenets/Cart/PayCard';
import { PaymentKlarna } from '../componenets/Cart/PayKlarna';
import { PaymentSwish } from '../componenets/Cart/PaySwish';
import { DeliveryMethod, deliveryMethods } from '../componenets/deliveryMethods';
import OrderSuccessMessage from '../componenets/OrderSuccess/OrderSuccessMessage';
import { IReceipt } from '../componenets/OrderSuccess/Reciept';
import { Product } from '../componenets/ProductItemsList';
import { Route } from 'react-router-dom';

const emptyUser: UserInfo = {
    name: '',
    email: '',
    phone: '',
    street: '',
    zipcode: '',
    city: '',
}

export type PaymentMethod = PaymentCard | PaymentSwish | PaymentKlarna;

const defaultPayment: PaymentMethod = {
    cardNumber: '',
    expDate: '',
    cardName: '',
    cvc: '',
}

const emptyReceipt: IReceipt = {
    cart: [],
    deliveryMethod: '',
    totalPrice: 0,
    paymentMethod: defaultPayment,
    userInfo: emptyUser,
}
interface State {
    cart: CartItem[];
    deliveryMethod: DeliveryMethod;
    userInfo: UserInfo;
    paymentInfo: PaymentMethod;
    receipt: IReceipt;
}

interface ContextValue extends State {
    addProductToCart: (product: Product, quantity: number | undefined) => void;
    setDeliveryMethod: (method: DeliveryMethod) => void;
    deleteProductFromCart: (id: number) => void;
    getTotalPrice: () => void;
    getBadgeQuantity: () => number;
    updateUserInfo: (userInfo: UserInfo) => void;
    updatePaymentInfo: (paymentInfo: PaymentMethod) => void;
    handlePlaceOrder: (history: any) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    deliveryMethod: deliveryMethods[0],
    userInfo: emptyUser,
    paymentInfo: defaultPayment,
    receipt: emptyReceipt,
    addProductToCart: () => {},
    setDeliveryMethod: () => {},
    deleteProductFromCart: () => {},
    getTotalPrice: () => {},
    getBadgeQuantity: () => 0,
    updateUserInfo: () => {},
    updatePaymentInfo: () => {},
    handlePlaceOrder: () => {},
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: [],
        deliveryMethod: deliveryMethods[0],
        userInfo: emptyUser,
        paymentInfo: defaultPayment,
        receipt: emptyReceipt,
    }
    
    componentDidMount() {
        this.setState({ 
            cart: JSON.parse(localStorage.getItem('cartItems') as string) || [],
        });
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

    deleteProductFromCart = (id: number) => {
        let cartItems = this.state.cart;
        const newCartItemsList = cartItems.filter((item: CartItem) => item.product.id !== id);
        localStorage.setItem('cartItems', JSON.stringify(newCartItemsList));
        this.setState({ cart: newCartItemsList });
    }

    getTotalPrice = () => {
        let cartItems = this.state.cart;
        let totalPriceProducts = (
            cartItems
            .map((item: any) => item.product.price * item.quantity)
            .reduce((a: number, b: number) => a + b, 0)
        );
        let deliveryPrice = this.state.deliveryMethod?.price;
        return totalPriceProducts + (deliveryPrice as number);
    }

    getBadgeQuantity = () => {
        let cartItems = this.state.cart;
        let quantity = (
            cartItems
            .map((item: CartItem) => item.quantity)
            .reduce((a: number, b: number) => a + b, 0)
        );
        return quantity;
    }

    updateUserInfo = (userInfo: UserInfo) => {
        this.setState({ userInfo: userInfo });
    }

    updatePaymentInfo = (paymentInfo: PaymentMethod) => {
        this.setState({ paymentInfo: paymentInfo });
    }

    createReceipt = () => {
        this.state.receipt.cart = [...this.state.cart];
        this.state.receipt.userInfo = {...this.state.userInfo};
        this.state.receipt.deliveryMethod = this.state.deliveryMethod.company;
        this.state.receipt.totalPrice = this.getTotalPrice();
        this.state.receipt.paymentMethod = {...this.state.paymentInfo};
        
        // return {
        //     cart: this.state.cart,
        //     userInfo: this.state.userInfo,
        //     deliveryMethod: this.state.deliveryMethod.company,
        //     totalPrice: this.getTotalPrice(),
        //     paymentMethod: {...this.state.paymentInfo},
        // }
    }

    clearCart = () => {
        this.state.deliveryMethod = deliveryMethods[0];
        this.state.cart = [];
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    handlePlaceOrder = async (history: any) => {
        //this.state.receipt = this.createReceipt();
        try {
            await createOrderMockApi();
        } catch (error) {
            return console.log(error);
        }
        this.createReceipt();
        console.log('receipt', this.state.receipt);
        this.clearCart();

        history.push('/ordersuccess');
    }

    render() {
        console.log(this.state);
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                deliveryMethod: this.state.deliveryMethod,
                userInfo: this.state.userInfo,
                paymentInfo: this.state.paymentInfo,
                receipt: this.state.receipt,
                addProductToCart: this.addProductToCart,
                setDeliveryMethod: this.setDeliveryMethod,
                deleteProductFromCart: this.deleteProductFromCart,
                getTotalPrice: this.getTotalPrice,
                getBadgeQuantity: this.getBadgeQuantity,
                updateUserInfo: this.updateUserInfo,
                updatePaymentInfo: this.updatePaymentInfo,
                handlePlaceOrder: this.handlePlaceOrder,
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;

async function createOrderMockApi() {
    return new Promise((res) => setTimeout(() => res("success"), 2000));
}