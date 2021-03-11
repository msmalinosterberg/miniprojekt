import { Layout, Row, Col } from 'antd';
import { Component, CSSProperties } from 'react'; 
import { Image } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';



interface State {
    productDetails: IProductList | undefined
}
interface IProductList {
    id: number; 
    title: string;
    description: string;
    price: number; 
    imageUrl: string;
}

interface Props extends RouteComponentProps {
    id: number
}
class ProductDetails extends Component <Props, State> {

    state: State = {
        productDetails: undefined
    }
    

    componentDidMount() {   
        const productId = (this.props.match.params as any).id

    }

    render () {

        return (
            <Layout style={detailContainer}>
                <Row justify="center" align="top" style={{marginTop:'0.5rem'}}>
                <div style = {divStyle}>
                    <Col lg={{span: 12}}>
                    <Image
                        width={450} 
                        style={imageStyle}
                        src='https://github.com/msmalinosterberg/miniprojekt/blob/master/src/assets/prod6.png?raw=true'/>          
                     </Col>
                </div>

                    <Col lg={{span: 12}}>
                        <h2 style={titleStyle}> Dress </h2>
                        <h3 style={descriptionStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque ipsa asperiores blanditiis amet nisi, 
                            culpa reiciendis excepturi eos voluptas quia provident nostrum minus dolore sequi recusandae nihil reprehenderit iure? Lorem ipsum dolor
                             sit amet consectetur adipisicing elit. Quia sequi expedita voluptates libero autem odit tempora assumenda accusamus iure,
                             exercitationem, impedit, quidem eaque. Deleniti odit quos neque officia, inventore veniam! </h3>
                        <h2 style={price}>429:-</h2>
                        <button style={{marginTop: '1rem'}}>Add to cart </button>
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


