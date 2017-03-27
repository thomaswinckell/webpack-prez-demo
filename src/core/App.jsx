import * as React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import IntlApp from "../components/IntlApp";
import Spinner from "../components/Spinner";



function resolveWithSpinner(componentPromise) {

    return class extends React.Component {

        static defaultProps = {
            spinner : Spinner
        };

        state = {};

        componentWillMount() {
            componentPromise.then(component => this.setState({component}));
        }

        render() {
            return !this.state.component ? React.createElement(this.props.spinner) : React.createElement(this.state.component);
        }
    }
}


const publicApp = new Promise(resolve => {
    require.ensure([], function (require) {
        resolve(require('../public/Routes.jsx').default)
    });
});

const securedApp = new Promise(resolve => {
    require.ensure([], function (require) {
        resolve(require('../secured/Routes.jsx').default)
    });
});


export default () => (
    <IntlApp>
        <Router>
                <Switch>
                    <Route component={resolveWithSpinner(publicApp)} path="/public"/>
                    <Route component={resolveWithSpinner(securedApp)} path="/secured"/>
                    <Redirect to="/public/home" />
                </Switch>
        </Router>
    </IntlApp>
)