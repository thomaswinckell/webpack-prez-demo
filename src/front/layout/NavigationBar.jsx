import * as React from "react";
import { Link } from "react-router-dom";


export default class NavigationBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <a className="navbar-brand" href="#">Front</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="huge">
                                Huge
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <Link className="btn btn-success" to="/front/login" role="button">
                        Login
                    </Link>
                </div>

                <div className="container">
                    { this.props.children }
                </div>
            </nav>
        )
    }
}