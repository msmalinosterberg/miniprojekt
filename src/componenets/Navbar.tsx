import { Row, Col, Menu, Badge } from "antd";
import { Header} from "antd/lib/layout/layout";
import React, { CSSProperties } from "react";
import logo from '../assets/logga.png'; 
import { ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AddToBadge from "./Badge";

function Navbar() {
  return (
    <Header style={layoutStyle}>
      <Row style={{width: '100%'}}>
        <Col span={8}>
          <Link to='/'><img src={logo} alt="logo" style={logoStyle} /></Link>
        </Col>
        <Col span={10} offset={6}>
          <Menu mode="horizontal" style={menuStyle}>
         
            <Menu.Item key="1"><Link to='/cart' style={{ color: 'white' }} >
           
            <ShoppingCartOutlined style={iconStyle}/> </Link>  
            </Menu.Item> 
            <AddToBadge />
            <Menu.Item key="2"><Link to='/admin'><p style={{ color: 'white', marginTop: '2rem' }}>Admin</p></Link></Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header> 
  )
}

const layoutStyle: CSSProperties = {
    width: '100%', 
    background: 'black',
    height: '6rem',
    display: 'flex', 
    alignItems:'center',
    justifyItems:'center',
    textDecoration: 'none',
    zIndex: 100,
    borderBottom: 'none'
}

const logoStyle: CSSProperties = {
    marginTop: '1rem', 
    padding: '2.3rem',
    alignItems: 'center',
    justifyContent: 'center'
}

const iconStyle: CSSProperties = {
    color: 'white', 
    fontSize: '2.3rem',
    float: 'right', 
    margin: '2.8rem', 
}

const menuStyle: CSSProperties = {
  float: 'right',
  background: 'black', 
  color: 'white', 
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center', 
  marginTop: '1.2rem'
 }

export default Navbar; 