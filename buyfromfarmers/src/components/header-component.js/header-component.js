import CartComponent from '../cart-component/cart-component';

const HeaderComponent =({mainHeader, subHeader})=>{
    

    return(
    <header>
        <div className="jumbotron">
                    <div>
                        <h1 className="py-5 display-1" style={{opacity: 1}}>{mainHeader}</h1>
                        <p className="py-5 px-3 text-justify text-lg-center">{subHeader}</p>        
                    </div>
                </div>
                <CartComponent count="2"/>
    </header>
    )
}

export default HeaderComponent;