import { Row, Col, Layout } from 'antd';

function Footer() {
    const { Footer } = Layout;
    return (
        <Row style={{width: '100%'}}>
            <Col span={24}>
                <Footer style={{ background: 'black', height: '6rem', padding: '2rem 4rem' }}>
                    <h3 style={{ color: 'white' }}>FashionStore | 2021</h3>
                </Footer>
            </Col> 
        </Row>
    ); 
}

export default Footer; 