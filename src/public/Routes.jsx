import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import Home from './page/Home';
import About from './page/About';
import Huge from './page/Huge';
import Login from './page/Login';


export default () => (
    <App>
        <Switch>
            <Route path="/public/home" component={Home}/>
            <Route path="/public/about" component={About}/>
            <Route path="/public/huge" component={Huge}/>
            <Route path="/public/login" component={Login}/>
            <Redirect to="/public/home"/>
        </Switch>
    </App>
)