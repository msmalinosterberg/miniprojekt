import { Avatar, Col, List, Row } from "antd";
import React, { Component, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { productList } from "../ProductItemsList";


class GetAdminList extends Component {

    render() {


        return (

            <Row>
                <Col>
                <List
                        dataSource={productList}
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="edit-item" 
                                        style={editStyle}
                                      //  onClick={() => this.handleEdit(item.id)}
                                        >Edit</a>]}>
                                <Link to={'/product/' + item.id}>
                                <List.Item.Meta                    
                                            avatar={<Avatar src={item.imageUrl} />} 
                                            title={<Link to={'/product/' + item.id}>{item.title}</Link>}
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