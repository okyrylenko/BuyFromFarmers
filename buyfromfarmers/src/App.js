import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import apple from '../src/images/apple.jpg';
import orange from '../src/images/orange.jpg';
import pear from '../src/images/pear.jpg';
import WellcomePage from './pages/wellcome-page'
import BuyerAccountPage from './pages/buyer-account'
import FarmerAccount from './pages/farmer-account'
import './App.css';
import ShoppingCart from "./pages/shopping-cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route exact path="/" element={<WellcomePage />} />
        <Route exact path ="/buyer-account" element={<BuyerAccountPage/>}/>
        <Route exact path ="/farmer-account" element={<FarmerAccount/>}/>
        <Route exact path ="/shopping-cart" element={<ShoppingCart/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
