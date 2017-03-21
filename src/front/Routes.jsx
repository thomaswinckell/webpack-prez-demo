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
            <Route path="/front/home" component={Home}/>
            <Route path="/front/about" component={About}/>
            <Route path="/front/huge" component={Huge}/>
            <Route path="/front/login" component={Login}/>
            <Redirect to="/front/home"/>
        </Switch>
    </App>
)