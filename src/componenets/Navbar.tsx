import { Row, Col } from "antd";
import Layout from "antd/lib/layout";
import { Header} from "antd/lib/layout/layout";
import React, { CSSProperties } from "react";
import logo from '../assets/logga.png'; 
import { ShoppingCartOutlined} from '@ant-design/icons';

function Navbar () {
    return (

<Layout>
    <Header style={layoutStyle}>
        <Row style={{width: '100%'}}>
          <Col span={24}>
            <p style={pStyle}> Admin </p> 
            <img src={logo} alt="logo" style={logoStyle} />
            <ShoppingCartOutlined style={iconStyle}/>
          </Col>
        </Row>
    </Header> 
</Layout>
    ); 
}


const layoutStyle: CSSProperties = {
    width: '100%', 
    background: 'black',
    height: '6rem',
    display: 'flex', 
    alignItems:'center',
    justifyItems:'center'
 
}

const logoStyle: CSSProperties = {
    padding: '2rem',
   
 
}
const iconStyle: CSSProperties = {
    color: 'white', 
    fontSize: '2.8rem',
    float: 'right', 
    margin: '2.5rem', 
    background: 'black'
    

}

const pStyle: CSSProperties = {
    fontWeight: 'bold',
    color: 'white', 
    fontSize: '1.6rem', 
    float: 'right',
   // margin: '2.7rem',
    padding: '1.5rem',
    alignItems: 'center'
    
}



export default Navbar; 