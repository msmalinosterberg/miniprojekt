import React, { Component } from 'react';
import { Card, Col, List, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productList } from '../ProductItemsList';

const { Meta } = Card;

class ProductCard extends Component {
    
    render() {
        return(
            <List
                grid={{
                    gutter: 16,
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
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img src={item.imageUrl} />}
                            actions={[
                                <ShoppingCartOutlined style={{ fontSize: '2rem' }}/>
                            ]}
                        >
                            <Meta title={item.title} description={item.price + ' kr'} />
                        </Card>
                    </List.Item>
                )}
                
            />
    )
    }
}

export default ProductCard;