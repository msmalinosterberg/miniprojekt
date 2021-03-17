import { Layout, Row, Col, message } from 'antd';
import { Component, ContextType, CSSProperties } from 'react'; 
import { Image } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { productList} from "../ProductItemsList";
import { CartContext } from '../../contexts/CartContext';
interface State {
    product: any
}
interface Props extends RouteComponentProps {
    id: number
}
const success = () => {
    message.success('The product was added to the cart', 5);
};
class ProductDetails extends Component <Props, State> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    state: State = {
        product: {}
    }
    
    componentDidMount() {   
        const productId = (this.props.match.params as any).id
        const product = productList.find((p) => p.id == productId);
        this.setState({product: product})
    }

    render () {
        const { addProductToCart } = this.context;
        return (
            <Layout style={detailContainer}>
                <Row justify="center" align="top" style={{ marginTop:'0.5rem' }}>
                    <div style = {divStyle}>
                        <Col lg={{span: 12}}>
                        <Image
                            width={450} 
                            style={imageStyle}
                            src={this.state.product.imageUrl}/>          
                        </Col>
                    </div>

                    <Col lg={{span: 12}}>
                        <h2 style={titleStyle}>{this.state.product.title}</h2>
                        <h3 style={descriptionStyle}>{this.state.product.description} </h3>
                        <h2 style={price}>{this.state.product.price + ' kr'} </h2>
                        <button style={{marginTop: '1rem'}}onClick={(e) => { success(); addProductToCart(this.state.product, undefined)}} >Add to cart </button>
                    </Col>
                </Row>
            </Layout> 
        ); 
    }    
}

export default withRouter(ProductDetails as any); 


const divStyle: CSSProperties = {
    padding: '1rem'
}

const detailContainer: CSSProperties = {
    background: 'white',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: '1rem',
    marginBottom: '1rem' 
}

const imageStyle: CSSProperties = {
   alignItems: 'center'
}

const titleStyle: CSSProperties = {
   fontSize: '2rem'
}

const descriptionStyle: CSSProperties = {
    
}

const price: CSSProperties = {
    fontWeight: 'bold'
}


function item(item: any): void {
    throw new Error('Function not implemented.');
}

function product(product: any): void {
    throw new Error('Function not implemented.');
}

