import * as React from "react";
import * as ReactDOM from "react-dom";


// polyfills
import "babel-polyfill";
import "es6-promise";
import "whatwg-fetch";

// global styles
import "index.scss";


import App from "./core/App";

ReactDOM.render(<App/>, document.getElementById('app'));
