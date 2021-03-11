import { Avatar, Col, List, Row } from 'antd';
import { Component, CSSProperties } from 'react';

export interface CartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
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
        const newCartItemsList = cartItems.filter((item: CartItem) => item.id !== id);
        localStorage.setItem('cartItems', JSON.stringify(newCartItemsList));
    }

    handleDelete = (id: number) => {
        const updatedCartItems = [...this.state.cartItems || []];
        this.setState({ cartList: updatedCartItems.filter(item => item.id !== id)});
        this.deleteItemFromList(id as number);
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
                            style={{color: 'red'}}
                            onClick={() => this.handleDelete(item.id)}>delete</a>]}>
                            <List.Item.Meta                    
                                avatar={<Avatar src={item.imageUrl} />}
                                title={<a href="#">{item.title}</a>}
                                description={[item.description.split('.')[0], 
                                <span style={{marginLeft: '15rem'}}>1</span>]}
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

export default CartItemsList;