import * as React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { autobind } from "core-decorators";

import * as IntlActions from "../../actions/IntlActions";

import "./NavigationBar.scss";

class NavigationBar extends React.Component {

    static contextTypes = {
        availableLanguages : React.PropTypes.arrayOf(React.PropTypes.object)
    };

    changeLanguage(language) {
        IntlActions.setLanguage(language);
    }

    @autobind
    renderLanguage(language, key) {
        const className = classNames("nav-link", { "active" : language.locale === this.props.intl.locale });
        return (
            <li className="nav-item" key={key}>
                <a className={ className } href="#" onClick={() => this.changeLanguage(language)}>
                    {language.name}
                </a>
            </li>
        );
    }

    renderLangSwitcher() {
        return (
            <ul className="navbar-nav mr-auto">
                { this.context.availableLanguages.map(this.renderLanguage) }
            </ul>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">

                <div className="container">

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <a className="navbar-brand" href="#">
                        <FormattedMessage id="navigation.public"/>
                    </a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/public/home">
                                    <FormattedMessage id="navigation.home"/>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/public/picture-wall">
                                    <FormattedMessage id="navigation.picture-wall"/>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/public/about">
                                    <FormattedMessage id="navigation.about"/>
                                </NavLink>
                            </li>
                        </ul>

                        {this.renderLangSwitcher()}

                        <NavLink className="btn btn-success" to="/public/login" role="button">
                            <FormattedMessage id="navigation.login"/>
                        </NavLink>
                    </div>

                </div>
            </nav>
        )
    }
}

export default injectIntl(NavigationBar);