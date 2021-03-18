import { Form, Input, InputNumber, Button, Col, Row } from 'antd';
import React, { Component, CSSProperties } from 'react';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
    };


class AdminEditDetails extends Component {   
            onFinish = (values: any) => {
            console.log(values);
            }
            
    
            render () { 
                return (  
                    <div> 
                    <Row style={ContainerStyle}>
                    <Col span={24} style={columnStyle}>
                  
                    <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                        <h1 style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>EDIT </h1>
                    <Form.Item
                        name={['user', 'name']}
                        label="Title"
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'description']}
                        label="Description"
                            
                    >
                    <Input.TextArea/>
                    </Form.Item>
                    
                    <Form.Item
                        name={['user', 'price']}
                        label="Price"
                        rules={[
                        {
                            type: 'number', 
                        }
                        ]}
                        >
                    <InputNumber />
                    </Form.Item>
                <Form.Item name={['user', 'imageUrl']}
                    label="ImageUrl">
                    <Input />
                </Form.Item>
                        
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button> 
                
                <Button type="primary" danger htmlType="submit">
                    Delete
                </Button>
                </div> 
                    </Form.Item>
                </Form>
                </Col>
                </Row>
                </div> 
                
                
            );
    }
}

const ContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    width: '60%',
    margin: 'auto',
    height: '100vh'
  }
  
  const columnStyle: CSSProperties = {
    marginTop: '6rem',
    marginBottom: '3rem',
  }
    




export default AdminEditDetails; 
