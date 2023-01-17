import HeaderComponent from "../components/header-component.js/header-component";
import OrderHistoryCardComponent from '../components/order-history-card-component/order-history-card-component';
import 'bootstrap/dist/css/bootstrap.min.css';

const BuyerAccount = ()=>{

    return(
        <div className="container">
            <HeaderComponent mainHeader="My Account"/>
            <main>
        <div >
            <div className="row g-0 mx-lg-5 mx-3">
                <div className="col-12 col-lg-3 px-3" id="personalInfo">
                <section className="row g-0">
                        <form>
                            <fieldset>
                                <legend className="fs-2 text-center">Personal Information</legend>
                                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#edit-personal-info">EDIT</button>
                                <p>First Name: <span style={{float: "inline-end"}}>John</span> </p>
                                <p>Last Name: <span style={{float: "inline-end"}}>Doe</span> </p>
                                <p>Street: <span style={{float: "inline-end"}}>MLK blvd</span></p>
                                <p>State:<span style={{float: "inline-end"}}>FL</span></p>
                                <p>Zip Code: <span style={{float: "inline-end"}}>32825</span></p>
                            </fieldset>

                        </form>
                    </section>
                    <section className=" modal row g-0" id="edit-personal-info" tabindex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="fs-2 text-center">Edit Personal Informaiton</h2>
                                </div>
                                <div className="modal-body">
                                    <form action="" method="post" className="col-12">
                                        <fieldset>                     
                                            <label for="fname" className="form-label">First Name</label>
                                            <input type="text" required name="fname" placeholder="first name"
                                                className="form-control pill" autofocus />
                                            <label for="lname" className="form-label">Last Name</label>
                                            <input type="text" required name="lname" placeholder="last name" className="form-control" />
                                            <label for="street" className="form-label">Street</label>
                                            <input type="text" required name="street" placeholder="street" className="form-control" />
                                            <label for="state" className="form-label">State</label>                              
                                            <select name="state" required className="form-select">
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                            <label for="zip-code" className="form-label">Zip Code</label>
                                            <input type="text" required id="zip-code" placeholder="zip code" className="form-control" />
                                            <div className="d-flex">
                                                <button  className="btn btn-outline-light mt-2">CANCEL</button>
                                                <button type="submit" className="btn btn-outline-light mt-2">SAVE</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                       
                    </section>
                    
                </div>
                <section className="col-12 col-lg-8 px-lg-5 offset-lg-1" id="orderHistory">
                    <p className="fs-2 text-center" style={{margin: "20px"}}>Order History</p>
                    <div id="receipts-container" className=" w-70 mx-auto fs-5 d-flex flex-wrap flex-column flex-lg-row gap-5 justify-content-between mb-5">
                        <OrderHistoryCardComponent dateOfPurchase="01/01/2020" name="my farm" total="200"/>
                        <OrderHistoryCardComponent dateOfPurchase="01/01/2020" name="my farm" total="200"/>
                        <OrderHistoryCardComponent dateOfPurchase="01/01/2020" name="my farm" total="200"/>
                    </div>
                </section>
            </div>
        </div>
    </main>
        </div>
    )
}

export default BuyerAccount;