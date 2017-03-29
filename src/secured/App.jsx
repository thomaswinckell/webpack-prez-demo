import * as React from "react";

import NavigationBar from "./layout/NavigationBar";

import "./App.scss";

export default props => (
    <div>
        <NavigationBar/>
        <div className="container secured-container">
            { props.children }
        </div>
    </div>
)