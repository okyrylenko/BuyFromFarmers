import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationComponent = function(){
    return(
        <div id="form-container" className="container d-flex justify-content-center my-3 py-3 w-50">
            <form id="registration" novalidate>
                <fieldset className="px-5">                  
                    <label  for="fname" className="fs-6 form-label">Enter Your First Name</label>
                    <div className="error">Please correct an error message</div>
                    <input type="text" autofocus id="fname" min="2" className="form-control" placeholder="First Name" required/>
                    <label className="fs-6 form-label" for="lname" >Enter Your Last Name</label>
                    <div className="error">Please correct an error message</div>
                    <input type="text" id="lname" min="2" class="form-control" placeholder="Last Name" required/>
                    <label for="email" className="fs-6 form-label">Enter Email</label>
                    <div className="error">Please correct an error message</div>
                    <input type="email" id="email" min="2"class="form-control" placeholder="Email" required/>
                    <label for="password" className="fs-6 form-label">Password</label>
                    <div className="error">Please correct an error message</div>
                    <input type="password" id="password" class="form-control" placeholder="Password" required/>
                    <label for="confirm-password" className="fs-6 form-label">Confirm Password</label>
                    <div className="error">Please correct an error message</div>
                    <input type="password" id="confirm-password" class="form-control" placeholder="Confirm Pasword" required/>
                    <div className="error">Please correct an error message</div>
                    <label for="terms" style={{display:"inline"}} className="fs-6 form-label">
                        <input style={{display: "inline;"}} type="checkbox" id="terms" class="form-check" required value="tou"/>
                        Terms Of Use
                    </label>
                    <button type="submit" onclick="validateForm()" className="btn btn-outline-light">Create Account</button>
    
                </fieldset>
            </form>
        </div>
    )

       
}

export default RegistrationComponent
