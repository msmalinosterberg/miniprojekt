import React, { Component } from 'react';
import CarouselStart from './Carousel';
import ProductCard from './ProductCard';

class StartPageView extends Component {
    render() {
        return(
            <div>
                <CarouselStart />
                <ProductCard />
            </div>
        )
    }
}

export default StartPageView;