import * as React from "react";
import { IntlProvider } from "react-intl";
import { RefluxComponent } from "react-commons";

import Spinner from "./Spinner";
import * as IntlActions from "../actions/IntlActions";

import French from "../../intl/French";
import English from "../../intl/English";


export default class IntlApp extends RefluxComponent {

    static defaultProps = {
        langs : [French, English],
        defaultLang : English,
        messages : {},
        spinner : Spinner
    };

    static childContextTypes = {
        availableLanguages: React.PropTypes.arrayOf(React.PropTypes.func)
    };

    state = {
        currentLang : null
    };

    getChildContext() {
        return {
            availableLanguages: this.props.langs
        };
    }

    componentWillMount() {
        this.setLang(this.props.defaultLang);
        this.listenToAction(IntlActions.setLanguage, langProvider => this.setLang(langProvider));
    }

    setLang(lang) {
        lang().then(currentLang => this.setState({currentLang}));
    }

    renderIntlProvider() {
        return (
            <IntlProvider
                locale={this.state.currentLang.locale}
                messages={this.state.currentLang.messages}
                formats={this.state.currentLang.formats}>
                { this.props.children }
            </IntlProvider>
        );
    }

    renderLoader() {
        return React.createElement(this.props.spinner);
    }

    render() {
        if(!this.state.currentLang) {
            return this.renderLoader();
        } else {
            return this.renderIntlProvider();
        }
    }
}