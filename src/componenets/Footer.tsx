import { Row, Col } from 'antd';
import Layout, { Footer } from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react'; 
import logo from '../assets/logga.png'; 



function Footer2() {
    
    return (
        <Layout>
            <Row style={{width: '100%'}}>
            <Col span={24}>
            <Footer style = {{background: 'black', height: '6rem'}}>
            <img src={logo} alt="logo" style={logoStyle2} />
            </Footer>
            </Col> 
            </Row>
        </Layout>
    ); 
}


const logoStyle2: CSSProperties = {
     
    display: 'flex', 
    alignItems: 'center', 
    justifyContent:'center',
   
}

export default Footer2; 