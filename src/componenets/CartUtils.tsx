import { CartItem } from "./Cart/CartItemsList";
import { Product } from "./ProductItemsList";


export default function saveToCart(product: Product, quantity: number | undefined) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
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
    return cartItems;
}