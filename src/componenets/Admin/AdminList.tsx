import { Avatar, Col, List, Row } from "antd";
import React, { Component, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { productList } from "../ProductItemsList";

interface Products {
    product: Products; 
}

interface State {
    products?: Products[]; 
}

class GetAdminList extends Component <State>{

    state: State = {
        products: []
    }

    componentDidMount() {
        this.setState({ products: JSON.parse(localStorage.getItem('products') as string) || []});
    }


 
    render() {


        return (
            <Row>
                <Col>
                <List
                        dataSource={productList}
                        renderItem={item => (
                            <List.Item>
                                <Link to={'/edit-product/' + item.id}>
                                    <p style={editStyle}>edit</p>
                                <List.Item.Meta                    
                                        avatar={<Avatar src={item.imageUrl} />} 
                                        title={<Link to={'/edit-product/' + item.id}>{item.title}</Link>}
                                        description={[item.description.split('.')[0],  
                                        ]}
                                /> 
                                </Link>
                                
                            </List.Item>
                        )}
                     /> 
                </Col>
            </Row> 
        )
    }
}



const editStyle: CSSProperties = {
    color: 'red'
}


export default GetAdminList; 