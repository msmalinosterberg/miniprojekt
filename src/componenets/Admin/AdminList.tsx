import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, List, Row, } from "antd";
import React, { Component, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { productList } from "../ProductItemsList";

interface Products {
    product: Products; 
}

interface State {
    products?: Products[]; 
}

class GetAdminList extends Component < {}, State>{

    state: State = {
        products: []
    }

    componentDidMount() {
        this.setState({ products: JSON.parse(localStorage.getItem('products') as string) || []});
    }


 
    render() {
    

        return (
            <Row style={containerStyle}>
                <Col style={columnStyle}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', marginTop: '2rem'}}>
                <h1 style={{fontWeight: 'bold'}}>ADMIN </h1>
                
                <Link to ={'/add-product'}> 
                <Button type="primary" icon={<PlusOutlined />}>
                 Add product
                 </Button>
                 </Link> 
                 </div>    

                <List   grid={{
                            gutter: 12,
                            xs: 1,
                            sm: 1,
                            md: 1,
                            lg: 1,
                            xl: 1,
                            xxl: 1,
                        }}
                        dataSource={productList}
                        renderItem={item => (
                            <List.Item>
                                <Link to={'/edit-product/' + item.id}>
                                   
                                <List.Item.Meta                    
                                        avatar={<Avatar size={64} src={item.imageUrl} />} 
                                        title={<Link to={'/edit-product/' + item.id}>{item.title}</Link>}
                                        description={[item.description.split('.')[0],  
                                        ]}
                                />  
                                <p style={editStyle}>edit</p>
                                </Link>
                                
                            </List.Item>
                        )}
                     /> 
                </Col>
            </Row> 
        )
    }
}

const containerStyle: CSSProperties ={
    display: 'flex', 
    justifyContent: 'center',
    marginBottom: '2rem'

}

const columnStyle: CSSProperties = {
   
    
}


const editStyle: CSSProperties = {
    color: 'red', 
    display: 'flex', 
    justifyContent: 'flex-end',
    borderBottom: '1px solid lightgrey',
    alignItems: 'center'

    


}


export default GetAdminList; 