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


const frontApp = new Promise(resolve => {
    require.ensure([], function (require) {
        resolve(require('../front/Routes.jsx').default)
    });
});

const adminApp = new Promise(resolve => {
    require.ensure([], function (require) {
        resolve(require('../admin/Routes.jsx').default)
    });
});


export default () => (
    <IntlApp>
        <Router>
                <Switch>
                    <Route component={resolveWithSpinner(frontApp)} path="/front"/>
                    <Route component={resolveWithSpinner(adminApp)} path="/admin"/>
                    <Redirect to="/front/home" />
                </Switch>
        </Router>
    </IntlApp>
)