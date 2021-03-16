import { Component, ContextType, CSSProperties } from 'react';
import { Card, Col, List, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productList } from '../ProductItemsList';
import { Link } from 'react-router-dom';
import saveToCart from '../CartUtils';
import { CartContext } from '../../contexts/CartContext';

const { Meta } = Card;

class ProductCard extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;
        
    render() {
        const { addProductToCart } = this.context;
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
                                                onClick={(e) => { e.preventDefault(); addProductToCart(item, undefined)}} />
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