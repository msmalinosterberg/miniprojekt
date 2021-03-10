import React, { Component, CSSProperties } from 'react';
import { Carousel } from 'antd';
import carousel1 from '../assets/carousel1.png'; 



class CarouselStart extends Component {

    render() {
        return (

            <Carousel autoplay>
                <div>
                    <img src={carousel1} alt="girl with glasses" style={caoruselPic1} />
 
                    <h1 style={carouselStyle}>1</h1>
                </div>
                <div>
                    <h3 style={carouselStyle}>2</h3>
                </div>
                <div>
                    <h3 style={carouselStyle}>3</h3>
                </div>
                <div>
                    <h3 style={carouselStyle}>4</h3>
                </div>
            </Carousel>
        )
    }
    
}

export default CarouselStart;

const carouselStyle: CSSProperties = {
    display: 'flex',
    fontSize: '16px',
    height: '25rem',
    background: 'pink'
};
const caoruselPic1: CSSProperties = {
    display: 'flex',
    height: '25rem',
};


