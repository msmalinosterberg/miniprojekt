import { Form, Input, InputNumber, Button, Col, Row } from "antd";
import React, { Component, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
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

interface Props extends RouteComponentProps<{ id: string }> {}

interface State {
  products: Product[];
}
//En produkt i statet ist för flera 
class AdminEditDetails extends Component<Props, State> {
  state: State = {
    products: JSON.parse(localStorage.getItem("products") as string) || [],
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  //constructor som hämtar from LS och kollar om routecompProps === produktid 
  render() {
    const { products } = this.state;

    const product = products.find(p => p.id == Number(this.props.match.params.id))
    //404 sida 
    if (!product) {
      return "?????"
    }

    console.log(product)

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
                EDIT{" "}
              </h1>
              <Form.Item name={["product", "name"]} label="Title">
                <Input defaultValue={product.title}  />

              </Form.Item>

              <Form.Item name={["product", "description"]} label="Description">
                <Input.TextArea defaultValue={product.description}/>
              </Form.Item>

              <Form.Item name={["product", "price"]} label="Price">
                <Input defaultValue={product.price}/>
              </Form.Item>
              
              <Form.Item name={["product", "imageUrl"]} label="ImageUrl">
                <Input defaultValue={product.imageUrl}/>
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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

export default AdminEditDetails;
