import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "../components/header-component.js/header-component";
import LoginComponent from '../components/login-component/login-component';
import RegistrationComponent from '../components/registration-component/registration-component';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const WellcomePage =()=>{
    const onMenuSelect =(e)=>{
        //useNavigate.push(e.target.value);
    }
    return(
        <div className="container">
            <HeaderComponent mainHeader="Wellcome" subHeader="A place Where you can connect and buy from your local farmers or if you are a farmer you can sell your products directly to the consumers"/>
            <main classNname="container text-justify g-0">
            <nav  className="text-center">
            <ul className="d-flex flex-column flex-lg-row navbar navbar-expand-sm justify-content-center justify-content-lg-evenly m-0 list-group">
            <Link to="/farmer-account" className="btn btn-outline-danger" onClick={onMenuSelect}>Farmer Account</Link>
            <Link to="/buyer-account" className="btn btn-outline-danger" onClick={onMenuSelect}>Buyer Account</Link>
            <Link to="/shopping-cart" className="btn btn-outline-danger" onClick={onMenuSelect}>Shopping Cart</Link>
            </ul>
        </nav>
            <section className="px-3 pb-3">
                    <h2>How it Works</h2>
                    <h3>If you want to buy fresh  produce from local farmers</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                    <h3>If you want to see a produce to the local community</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </section>  
             </main>
        </div>
        
    )
}

export default WellcomePage;