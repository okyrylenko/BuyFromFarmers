import 'bootstrap/dist/css/bootstrap.min.css';
const OrderHistoryCardComponent = ({dateOfPurchase, name, total})=>{
    return(
        <div className="card-bg">
                            <div className="d-flex justify-content-between m-3">
                                <div className="me-lg-5">
                                    Date Of Purchase
                                </div>
                                <div className="ms-lg-5 fw-bolder">
                                    {dateOfPurchase}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between m-3">
                                <div>
                                    Farm
                                </div>
                                <div className="ms-lg-5 fw-bolder">
                                    {name}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between m-3">
                                <div>
                                    Total
                                </div>
                                <div className="ms-lg-5 fw-bolder">
                                    {`$${total}`}
                                </div>
                            </div>
                        </div>
    )
}

export default OrderHistoryCardComponent