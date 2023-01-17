const ProductComponent = ({ product }) => {
  return (
    <>
      <li className="card bg-light rounded-3 mb-5 col-lg-3 mx-lg-5">
        <h3 className="product-name">{product.name}</h3>
        <img src={product.image} className="img-fluid" />
        <div className="d-flex">
          <p className="col text-start ms-3">Quantity:</p>
          <p className="col text-end me-3">{product.quantity}</p>
        </div>
        <div className="d-flex">
          <p className="col text-start ms-3">Price:</p>
          <p className="col text-end me-3">{product.price}</p>
        </div>
      </li>
    </>
  );
};

export default ProductComponent;
