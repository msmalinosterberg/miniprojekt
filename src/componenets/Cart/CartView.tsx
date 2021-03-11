import React, { Component } from 'react';
import CartItemsList from './CartItemsList';
import InformationForm from './InformationForm';

class CartView extends Component {
    render() {
        return(
            <>
                <CartItemsList />
                <InformationForm />
            </>
        )
    }
}

export default CartView;