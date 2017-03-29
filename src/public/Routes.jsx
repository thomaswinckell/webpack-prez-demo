import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import ResolveWithSpinner from "../utils/ResolveWithSpinner";


const pictureWallPage = ResolveWithSpinner(() => new Promise(resolve => {
    require.ensure([], require => resolve(require('./page/PictureWall.jsx').default));
}));


export default () => (
    <App>
        <Switch>
            <Route path="/public/home" component={Home}/>
            <Route path="/public/about" component={About}/>
            <Route path="/public/picture-wall" component={pictureWallPage}/>
            <Route path="/public/login" component={Login}/>
            <Redirect to="/public/home"/>
        </Switch>
    </App>
)