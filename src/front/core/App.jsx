import * as React from "react";

import NavigationBar from "./NavigationBar";


export default props => (
    <div>
        <NavigationBar/>
        <div className="container">
            { props.children }
        </div>
    </div>
)