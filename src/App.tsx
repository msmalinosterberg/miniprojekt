import React from 'react';
import './App.css'
import Footer2 from './componenets/Footer';
import Navbar from './componenets/Navbar';
import ProductDetails from './componenets/ProductDetails/ProductDetails';
import StartPageView from './componenets/StartPage/StartPageView';

function App() {
  return (
    <>
      <Navbar /> 
     {/* <StartPageView /> */}
     <ProductDetails /> 

      <Footer2 /> 
    </>
  );
}

export default App;
