import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import CartView from './componenets/Cart/CartView';
import Footer2 from './componenets/Footer';
import Navbar from './componenets/Navbar';
import StartPageView from './componenets/StartPage/StartPageView';

function App() {
  return (
    <>
      <Router>
      <Navbar /> 
      <Route exact path='/'>
        <StartPageView />
      </Route>
        <Route path='/cart'>
          <CartView />
        </Route>
      </Router>
      <Footer2 /> 
    </>
  );
}

export default App;
