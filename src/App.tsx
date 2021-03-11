import React from 'react';
import './App.css'
import CartView from './componenets/Cart/CartView';
import Footer2 from './componenets/Footer';
import Navbar from './componenets/Navbar';
import StartPageView from './componenets/StartPage/StartPageView';

function App() {
  return (
    <>
      <Navbar /> 
      <StartPageView />
      {/* <CartView /> */}
      <Footer2 /> 
    </>
  );
}

export default App;
