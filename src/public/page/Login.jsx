import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";


export default () => (
    <div className="container">

        <form className="form-signin">

            <h2 className="form-signin-heading">
                <FormattedMessage id="login.title"/>
            </h2>

            <label htmlFor="inputEmail">
                <FormattedMessage id="login.email"/>
            </label>

            <input type="email" id="inputEmail" className="form-control" required autoFocus/>

            <label htmlFor="inputPassword">
                <FormattedMessage id="login.password"/>
            </label>

            <input type="password" id="inputPassword" className="form-control" required/>

            <div className="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"/> <FormattedMessage id="login.remember-me"/>
                </label>
            </div>

            <Link className="btn btn-lg btn-primary btn-block"
                  type="submit" to="/secured/home">
                <FormattedMessage id="login.sign-in"/>
            </Link>

        </form>

    </div>
)