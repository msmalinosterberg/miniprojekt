
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import Footer2 from './componenets/Footer';
import Navbar from './componenets/Navbar';
import ProductDetails from './componenets/ProductDetails/ProductDetails';
import StartPageView from './componenets/StartPage/StartPageView';

function App() {
  return (
    <>
    <BrowserRouter> 
      <Navbar /> 
      <Switch> 
        <Route path = '/product/:id' component={ProductDetails} />
      </Switch>
      <StartPageView /> 
      <Footer2 /> 
      </BrowserRouter> 
    </>
  );
}

export default App;
