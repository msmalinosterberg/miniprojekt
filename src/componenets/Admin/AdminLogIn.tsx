import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import AdminEditDetails from './AdminEditDetails';
import GetAdminList from './AdminList';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class AdminLogIn extends React.Component {

         onFinish = (values: any) => {
          console.log('Success:', values);
        };
      
         onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
    
    render() {
       
        return (
          <div> 
        <Row style={ContainerStyle}>
            <Col span={24} style={columnStyle}>
            <h1 style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>LOG IN </h1>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item {...tailLayout}>
               
                <Button type="primary" htmlType="submit">
                 Log in 
                </Button> 
            

              </Form.Item>
            </Form>

            </Col>
           </Row>
           <GetAdminList /> 

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


export default AdminLogIn; 
