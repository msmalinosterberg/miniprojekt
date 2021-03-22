import { Component, CSSProperties } from "react";
import { Form, Input, InputNumber, Button, Col, Row } from "antd";
import { Product } from "../ProductItemsList";



const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  interface State {
    products: Product[];
    product: Product | undefined;

  }
  
class AddNewProduct extends Component {
    state: State = {
        products: JSON.parse(localStorage.getItem("products") as string) || [],
        product: undefined,

      };
    
      onFinish = (values: any) => {
        const products = JSON.parse(localStorage.getItem("products") as string) || [];
        const newProduct: Product = {...this.state.product, ...values.product};
        const addedProduct = products.map((item: Product) => item.id === newProduct.id ? newProduct : item);
        localStorage.setItem('products', JSON.stringify(addedProduct));

      };

    render() {
        return (

    <div>
        <Row style={ContainerStyle}>
          <Col span={24} style={columnStyle}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={this.onFinish}
              validateMessages={validateMessages}
            >
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                ADD NEW PRODUCT {" "}
              </h1>
              <Form.Item name={["product", "name"]} label="Title">
                <Input  />

              </Form.Item>

              <Form.Item name={["product", "description"]} label="Description">
                <Input.TextArea />
              </Form.Item>

              <Form.Item name={["product", "price"]} label="Price">
                <Input />
              </Form.Item>
              
              <Form.Item name={["product", "imageUrl"]} label="ImageUrl">
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>

                
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>



        )

        
    }
}


const ContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-around",
    width: "60%",
    margin: "auto",
    height: "100vh",
  };
  
  const columnStyle: CSSProperties = {
    marginTop: "6rem",
    marginBottom: "3rem",
  };

export default AddNewProduct; 