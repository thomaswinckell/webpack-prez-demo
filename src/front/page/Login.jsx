import * as React from "react";
import { Link } from "react-router-dom";


export default () => (
    <div className="container">

        <form className="form-signin">

            <h2 className="form-signin-heading">Please sign in</h2>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>

            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>

            <label htmlFor="inputPassword" className="sr-only">Password</label>

            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

            <div className="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>

            <Link className="btn btn-lg btn-primary btn-block"
                  type="submit" to="/admin/home">
                Sign in
            </Link>

        </form>

    </div>
)