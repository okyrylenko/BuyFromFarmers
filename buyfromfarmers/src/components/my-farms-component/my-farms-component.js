import 'bootstrap/dist/css/bootstrap.min.css';
import FarmInformationComponent from '../farm-information-component/farm-information-component'

const MyFarmsComponent = function({farms}){
    return(
        <>
            <div className="col-12 col-lg-5 mx-lg-5 px-lg-5">
                <div className="col-12 p-3">
                    <legend className="h2">My Farms</legend>
                    <FarmInformationComponent farms={farms}/>
                    <div className="modal" tabindex="-1" id="edit-farm">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2>Edit Personal Farm</h2>
                                    </div>
                                        <div className="col-12 mt-5 p-3">
                                            <form>
                                                <fieldset>
                                                    <label id="name" className="form-label">Name</label>
                                                    <input type="text" required id="name" placeholder="farm name" maxlength="50" className="form-control" />
                                                    <label for="farm-street" className="form-label">Street</label>
                                                    <input type="text" required id="farm-street" placeholder="street" className="form-control" />
                                                    <label for="farm-state" className="form-label">State</label>
                                                    <select id="farm-state" className="form-select" >
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
                                                    <label for="farm-zip-code" className="form-label">Zip Code</label>
                                                    <input type="text" required id="farm-zip-code" placeholder="zip code" className="form-control" />
                                                    <button type="submit" className="btn btn-outline-light ">SAVE</button>
                                                </fieldset>                       
                                            </form>
                                    </div>
                                
                                </div>
                            </div>
                    </div> 
                </div>
         
            </div> 
            
        </>
    )

}

export default MyFarmsComponent