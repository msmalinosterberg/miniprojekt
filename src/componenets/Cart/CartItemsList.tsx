import { Avatar, Col, List, Row } from 'antd';
import React, { Component, CSSProperties } from 'react';
import { productList } from '../ProductItemsList';

export interface CartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl?: string;
}
interface Props {
    data: CartItem[];
}

interface State {
    cartItems: CartItem[];
}

class CartItemsList extends Component {

    state: State = {
        cartItems: []
    }

    render() {
        return(
            <Row style={listContainerStyle}>
                <Col span={24} style={columnStyle}>
                    <List
                        itemLayout="horizontal"
                        dataSource={productList}
                        renderItem={item => (
                        <List.Item
                            actions={[<a key="list-loadmore-delete" 
                            style={{color: 'red'}}>delete</a>]}>
                            <List.Item.Meta                    
                            avatar={<Avatar src={item.imageUrl} />}
                            title={<a href="#">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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