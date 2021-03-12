import React, { Component, CSSProperties } from 'react';
import { Card, Col, List, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productList } from '../ProductItemsList';
import { Link } from 'react-router-dom';
import { CartItem } from '../Cart/CartItemsList';

const { Meta } = Card;
class ProductCard extends Component {
    
    saveToCart(record: CartItem) {
        console.log('hej')
        let cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
        cartItems.push(record);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    

    render() {
        return( 

            
            <Row style={cardContainer}>
                <Col span={24} style={columnStyle}>
                    <List
                        grid={{
                            gutter: 25,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }}
                        dataSource={productList}
                        renderItem={item => (
                            <List.Item>
                                <Link to={'/product/' + item.id}>

                                <Card
                                    hoverable
                                    cover={<img src={item.imageUrl} />}
                                    actions={[
                                        <ShoppingCartOutlined 
                                            style={{ fontSize: '2rem' }}
                                            onClick={() => this.saveToCart(item)}/>
                                    ]}
                                >
                                    <Meta title={item.title} description={item.price + ' kr'} />
                                </Card>
                                </Link>
                            </List.Item>
                        )}    
                    />
                </Col>
            </Row>
      
       
        )
    }
}

export default ProductCard;

const cardContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    width: '80%',
    margin: 'auto'
}
const columnStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
    marginBottom: '3rem',
}