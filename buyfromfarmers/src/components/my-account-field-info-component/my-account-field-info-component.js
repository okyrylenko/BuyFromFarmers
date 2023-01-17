import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalInformationComponent = function({user}){
    const {firstName, lastName,street, state, zip} = user;
    return(
        <>
        <div class="col-12 col-lg-5 mx-lg-5 px-lg-5">
                    <div class="col-12 p-3">
                        <form>
                            <fieldset>
                                <legend class="h2">My Account</legend>
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#edit-personal-info">EDIT</button>
                                <p className="fs-5">First Name: <span>{firstName}</span> </p>
                                <p className="fs-5">Last Name: <span>{lastName}</span> </p>
                                <p className="fs-5">Street: <span>{street}</span> </p>
                                <p className="fs-5">State: <span>{state}</span> </p>
                                <p className="fs-5">Zip: <span>{zip}</span> </p>
                            </fieldset>
                        </form>
                    </div>
                    <div class="modal" tabindex="-1" id="edit-personal-info">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2>Edit Personal Informaiton</h2>
                                </div>
                                <form action="" method="post" class="mx-5">
                                    <fieldset>
                                    <label for="fname" class="form-label">First Name</label>
                                    <input type="text" required name="fname" placeholder="first name" class="form-control" />
                                    <label for="lname" class="form-label">Last Name</label>
                                    <input type="text" required name="lname" placeholder="last name"class="form-control"  />
                                    <label for="street" class="form-label">Street</label>
                                    <input type="text" required name="street" placeholder="street" class="form-control" />
                                    <label for="state" class="form-label">State</label>
                                    <select id="state" class="form-select" >
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
                                    <label for="zip-code" class="form-label">Zip Code</label>
                                    <input type="text" required id="zip-code" placeholder="zip code" class="form-control"  />
                                    <div class="d-flex">
                                        <button  class="btn btn-outline-light mt-2">CANCEL</button>
                                        <button type="submit" class="btn btn-outline-light mt-2">SAVE</button>
                                    </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        
    )
}

export default PersonalInformationComponent;