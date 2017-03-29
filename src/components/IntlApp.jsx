import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
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
        availableLanguages: React.PropTypes.arrayOf(React.PropTypes.object)
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
        lang.provider().then(currentLang => {
            addLocaleData(currentLang.localeData);
            this.setState({currentLang})
        });
    }


    /**
     * React-intl accept only a flat object containing messages.
     * Here, we flat messages putting a '.' between each object key.
     * @param messages The messages not flatten
     * @param prefix The prefix for the messages (internal use)
     */
    flatMessages(messages, prefix = "") {
        return Object.keys(messages).map( key => {
            const value = messages[key];
            const id = `${prefix}${prefix.length > 0 ? '.' : ''}${key}`;
            if(typeof value === 'string') {
                return { [id] : value };
            }
            return this.flatMessages(value, id);
        }).reduce((acc, curr) => Object.assign({}, acc, curr), {});
    }

    renderIntlProvider() {
        return (
            <IntlProvider
                locale={this.state.currentLang.locale}
                messages={this.flatMessages(this.state.currentLang.messages)}
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