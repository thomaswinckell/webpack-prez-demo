import * as React from "react";

import "./Spinner.scss";


export default props => (
    <div className="spinner-container">
        <div className="spinner"/>
        <h5>{ props.message }</h5>
    </div>
)