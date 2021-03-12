import { Avatar, Col, List, Row, InputNumber } from 'antd';
import { Component, CSSProperties } from 'react';
import { Product } from '../ProductItemsList';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface State {
    cartItems?: CartItem[];
}
class CartItemsList extends Component<State> {
   
    state: State = {
        cartItems: []
    }

    componentDidMount() {
        this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems') as string) || []});
    }
    
    deleteItemFromList(id: number) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        const newCartItemsList = cartItems.filter((item: CartItem) => item.product.id !== id);
        localStorage.setItem('cartItems', JSON.stringify(newCartItemsList));
    }

    handleDelete = (id: number) => {
        const updatedCartItems = [...this.state.cartItems || []];
        this.setState({ cartItems: updatedCartItems.filter(item => item.product.id !== id) });
        this.deleteItemFromList(id as number);
    }

    onChangeQuantity(quantity: number, product: Product) {
        const cartItems = this.saveToCart(product, quantity);
        this.setState({ cartItems: cartItems });
    }

    saveToCart(product: Product, quantity: number | undefined) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        const existingCartItem = cartItems.filter((item: CartItem) => item.product.id === product.id);
        if (existingCartItem.length === 0) {
            const cartItem = {product: product, quantity: 1};
            cartItems.push(cartItem);
        } else if (quantity) {
            const cartItem = {product: product, quantity: quantity};
            cartItems = cartItems.filter((item: CartItem) => item.product.id !== product.id);
            cartItems.push(cartItem);
        } else {
            const cartItem = {product: product, quantity: existingCartItem[0].quantity + 1};
            cartItems = cartItems.filter((item: CartItem) => item.product.id !== product.id);
            cartItems.push(cartItem);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return cartItems;
    }

    render() {
        return(
            <Row style={listContainerStyle}>
                <Col span={24} style={columnStyle}>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.cartItems}
                        renderItem={item => (
                        <List.Item
                            actions={[<a key="delete-item" 
                            style={deleteStyle}
                            onClick={() => this.handleDelete(item.product.id)}>delete</a>]}>
                            <List.Item.Meta                    
                                avatar={<Avatar src={item.product.imageUrl} />}
                                title={<a href="#">{item.product.title}</a>}
                                description={[item.product.description.split('.')[0], 
                                <InputNumber min={1} max={10} defaultValue={item.quantity} onChange={(value) => this.onChangeQuantity(value, item.product)} style={numberInputStyle} />,
                                item.product.price * item.quantity + ' kr']}
                            />
                        </List.Item>
                        )}
                    />
                </Col>
            </Row>
        )
    }
}

const listContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    width: '80%',
    margin: 'auto'
}

const columnStyle: CSSProperties = {
    marginTop: '3rem',
    marginBottom: '3rem',
}

const numberInputStyle: CSSProperties = {
    margin: '0 8rem'
}

const deleteStyle: CSSProperties = {
    color: 'red',
    marginTop: '1rem'
}

export default CartItemsList;