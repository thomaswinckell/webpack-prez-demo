import * as React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import * as IntlActions from "../../actions/IntlActions";


class NavigationBar extends React.Component {

    static contextTypes = {
        availableLanguages : React.PropTypes.arrayOf(React.PropTypes.object)
    };

    changeLanguage(language) {
        IntlActions.setLanguage(language);
    }

    renderLanguage(language, key) {
        if(this.props.intl.locale === language.locale) {
            return (
                <li className="nav-item active" key={key}>
                    <FormattedMessage id={`languages.${language.locale}`}/>
                </li>
            );
        } else {
            return (
                <li className="nav-item" key={key}>
                    <a className="nav-link" onClick={() => this.changeLanguage(language)}>
                        <FormattedMessage id={`languages.${language.locale}`}/>
                    </a>
                </li>
            );
        }
    }

    renderLangSwitcher() {
        return (
            <ul className="navbar-nav mr-auto">
                { this.context.availableLanguages.map((l, key) => this.renderLanguage(l, key)) }
            </ul>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <a className="navbar-brand" href="#">Secured</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">
                                About
                            </Link>
                        </li>
                    </ul>
                    {this.renderLangSwitcher()}
                    <Link className="btn btn-success" to="/public" role="button">
                        Logout
                    </Link>
                </div>

                <div className="container">
                    { this.props.children }
                </div>
            </nav>
        )
    }
}

export default injectIntl(NavigationBar);