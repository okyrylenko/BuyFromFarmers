import { useEffect, useState,useMemo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/main.css'

const Card = ({title,price,images})=>{
    const [count, setCount] = useState(0);
    useEffect(() => {  
            alert(count);
        });

    const finish = useMemo(()=>{
        if(count===5){
            return count;
    }},[count])
    return(
    <li className="card bg-light rounded-3 mb-5 col-lg-5">
    <div className="product-name">{title}</div>
    <div id="product" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div classname="carousel-item active">
            <img src={images[0]} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={images[1]} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={images[2]} className="d-block w-100" alt="..."></img>
          </div>
        </div>
    </div>                      
    <div className="product-price">{price}</div>
    <div className="d-flex justify-content-between flex-column flex-lg-row">
        <button type="submit" className="add mx-auto my-2 btn btn-outline-light " data-bs-toggle="collapse" data-bs-target="#p1Example" aria-expanded="false" aria-controls="p1Example">DETAILS</button>
        <button type="submit" className="add mx-auto my-2 btn btn-outline-light " onClick={()=>setCount(count+1)}>ADD</button>
        <p>{finish}</p>
    </div>
</li>
    )
}

export default Card;