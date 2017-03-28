import * as React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import IntlApp from "../components/IntlApp";
import ResolveWithSpinner from "../utils/ResolveWithSpinner";



const publicApp = ResolveWithSpinner(() => new Promise(resolve => {
    require.ensure([], require => resolve(require('../public/Routes.jsx').default));
}));

const securedApp = ResolveWithSpinner(() => new Promise(resolve => {
    require.ensure([], require => resolve(require('../secured/Routes.jsx').default));
}));


export default () => (
    <IntlApp>
        <Router>
                <Switch>
                    <Route component={publicApp} path="/public"/>
                    <Route component={securedApp} path="/secured"/>
                    <Redirect to="/public/home" />
                </Switch>
        </Router>
    </IntlApp>
)