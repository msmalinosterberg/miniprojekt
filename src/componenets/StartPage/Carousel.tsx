import React, { Component, CSSProperties } from 'react';
import { Carousel } from 'antd';

class CarouselStart extends Component {

    render() {
        return (

            <Carousel autoplay>
                <div>
                    <img 
                        src="https://github.com/msmalinosterberg/miniprojekt/blob/master/src/assets/carousel1.png?raw=true" 
                        alt="girl with sunglasses" 
                        style={caoruselPic} 
                    />
                </div>
                <div>
                    <img 
                        src="https://github.com/msmalinosterberg/miniprojekt/blob/master/src/assets/carousel1.png?raw=true" 
                        alt="girl with sunglasses" 
                        style={caoruselPic} 
                    />
                </div>
                <div>
                    <img 
                        src="https://github.com/msmalinosterberg/miniprojekt/blob/master/src/assets/carousel1.png?raw=true" 
                        alt="girl with sunglasses" 
                        style={caoruselPic} 
                    />
                </div>
            </Carousel>
        )
    }

}

export default CarouselStart;

const caoruselPic: CSSProperties = {
    display: 'flex',
    height: 'auto',
    width: '100%'
};



