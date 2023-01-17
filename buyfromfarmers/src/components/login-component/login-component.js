import 'bootstrap/dist/css/bootstrap.min.css';

const LoginComponent = function(){

    return(
        <div id="form-container" className="w-50 container d-flex flex-column g-0 justify-content-between my-3 py-3">
            <form accept-charset="UTF-8" action="" autocomplete="off" method="post">
                <fieldset className="px-5">
                    <label for="email" className="form-label">Email</label>
                    <input type="email"  name="email" placeholder="email address" required autofocus className="form-control form-control" />
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name="password" placeholder="password" required className="form-control"/>
                    <button type="submit" className="btn btn-outline-light  btn-md mt-4" >Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginComponent