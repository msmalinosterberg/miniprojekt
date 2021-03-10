import React, { Component, CSSProperties } from 'react';
import { Carousel } from 'antd';
import carousel1 from '/Users/AmandasMacbook/Documents/Medieinstitutet HT20/React/miniprojekt-webbshop/src/assets/carousel1.png';



class CarouselStart extends Component {

    render() {
        return (

            <Carousel autoplay>
                <div>
                    <img src={carousel1} alt="girl with glasses" style={caoruselPic1} />
                    <h1 style={carouselStyle}>1</h1>
                </div>
                <div>
                    <img src={carousel1} alt="girl with glasses" style={caoruselPic1} />
                    <h3 style={carouselStyle}>2</h3>
                </div>
                <div>
                    <img src={carousel1} alt="girl with glasses" style={caoruselPic1} />
                    <h3 style={carouselStyle}>3</h3>
                </div>
            </Carousel>
        )
    }

}

export default CarouselStart;

const carouselStyle: CSSProperties = {
    display: 'flex',
    fontSize: '16px',
    background: 'pink'
};
const caoruselPic1: CSSProperties = {
    display: 'flex',
    height: 'auto',
    width: '100%'
};
// const carouselDiv: CSSProperties = {
//     display: 'flex',
//     backgroundImage: 'url(../asssets/prod2.png)',
//     height: '100rem',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };


