import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {
    const 
  return (
    <>
        <div class="container g-0">
            <h2>Your itmes</h2>
            <ul class="d-flex flex-column flex-lg-wrap mx-5 px-3 flex-lg-row justify-content-lg-between" >
                <li class="card bg-light rounded-3 mb-5 col-lg-3 mx-lg-5">
                    <h3 class="product-name">Product 2</h3>
                    <img src="src/images/banana.jpg" class="img-fluid"/>
                    <div class="d-flex">
                        <p class="col text-start ms-3">Quantity:</p>
                        <p class="col text-end me-3">2</p>
                    </div>
                    <div class="d-flex">
                        <p class="col text-start ms-3">Price:</p>
                        <p class="col text-end me-3">6.99</p>
                    </div>
                </li>
            </ul>
        </div>
    </>
  );
};

export default ShoppingCart;
