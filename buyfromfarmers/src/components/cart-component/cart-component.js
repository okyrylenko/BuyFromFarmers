import 'bootstrap/dist/css/bootstrap.min.css';
import shopoingCartImage from '../../../src/images/shopping-cart.png'
import '../cart-component/cart-component.css'
import { useState } from 'react';

const CartComponent =()=>{
    return(
        <>
            <p className="mb-0">{2}</p>
            <img src={shopoingCartImage}></img>
            
        </>
    )

}
export default CartComponent