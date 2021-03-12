import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import CartView from './componenets/Cart/CartView';
import Footer2 from './componenets/Footer';
import Navbar from './componenets/Navbar';
import ProductDetails from './componenets/ProductDetails/ProductDetails';
import StartPageView from './componenets/StartPage/StartPageView';

function App() {
  return (
    <>
      <Router>
      <Navbar /> 
      <Switch> 
        <Route path = '/product/:id' component={ProductDetails} />
      </Switch>
      <Route exact path='/'>
        <StartPageView />
      </Route>
        <Route path='/cart'>
          <CartView />
        </Route>
        <Footer2 /> 
      </Router>
      
    </>
  );
}

export default App;
