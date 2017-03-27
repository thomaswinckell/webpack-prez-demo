import * as React from "react";

import NavigationBar from "./layout/NavigationBar";


export default props => (
    <div>
        <NavigationBar/>
        <div className="container">
            { props.children }
        </div>
    </div>
)