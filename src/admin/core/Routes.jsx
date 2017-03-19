import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import Home from "../page/Home";
import About from "../page/About";


export default () => (
    <App>
        <Switch>
            <Route path="/admin/home" component={Home}/>
            <Route path="/admin/about" component={About}/>
            <Redirect to="home"/>
        </Switch>
    </App>
)