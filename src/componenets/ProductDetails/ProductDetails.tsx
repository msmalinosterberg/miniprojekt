import { Layout, Row, Col } from 'antd';
import React, { Component, CSSProperties } from 'react'; 
import { Image } from 'antd';

class ProductDetails extends Component {
    render () {

        return (
            <Layout style={detailContainer}>
          
                <Row justify="center" align="top" style={{marginTop:'0.5rem'}}>
                    <Col lg={{span: 12}}>
                    <Image
                        width={450} 
                        style={imageStyle}
                        src='https://github.com/msmalinosterberg/miniprojekt/blob/master/src/assets/prod6.png?raw=true'/>          
                       
                     </Col>
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

const detailContainer: CSSProperties = {
    background: 'white',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
   
    
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


export default ProductDetails; 