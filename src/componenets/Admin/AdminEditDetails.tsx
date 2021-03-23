import { Form, Input, Button, Col, Row, message } from "antd";
import { Component, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import ErrorPage from "../ErrorPage";
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
  product: Product | undefined;
}

const success = () => {
  message.success('The product has been updated', 5);
};

class AdminEditDetails extends Component<Props, State> {
  state: State = {
    products: JSON.parse(localStorage.getItem('products') as string) || [],
    product: undefined,
  };

  onFinish = (values: any) => {
    const products = JSON.parse(localStorage.getItem("products") as string) || [];
    const editedProduct: Product = {...this.state.product, ...values.product};
    const updatedProducts = products.map((item: Product) => item.id === editedProduct.id ? editedProduct : item);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('products') as string) || [];
    const product = products.find((p: Product) => p.id == Number(this.props.match.params.id));
    this.setState({ product: product });
  }

  handleDelete = () => {
    const products = JSON.parse(localStorage.getItem('products') as string) || [];
    const productId = this.state.product?.id;
    const newProducts = products.filter((item: Product) => item.id !== productId);
    localStorage.setItem('products', JSON.stringify(newProducts));
  }

  render() {
    const { product } = this.state;

    if (!product) {
      return <ErrorPage />
    }

    return (
      <div>
        <Row style={ContainerStyle}>
          <Col span={24} style={columnStyle}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={this.onFinish}
              validateMessages={validateMessages}
              initialValues={{
                product: {
                  title: this.state.product?.title,
                  description: this.state.product?.description,
                  price: this.state.product?.price,
                  imageUrl: this.state.product?.imageUrl,
                }
              }}
            >
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                EDIT
              </h1>
              <Form.Item name={["product", "title"]} label="Title">
                <Input />
              </Form.Item>

              <Form.Item name={["product", "description"]} label="Description">
                <Input.TextArea defaultValue={product.description}/>
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
                  <Button type="primary" onClick={(e) => { success();}} htmlType="submit">
                    Save
                  </Button>

                  <Button type="primary" danger onClick={this.handleDelete}>
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
  marginTop: "10rem",
  marginBottom: "3rem",
};

export default AdminEditDetails;
