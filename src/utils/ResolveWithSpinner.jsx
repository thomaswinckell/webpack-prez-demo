import * as React from "react";

import Spinner from "../components/Spinner";



export default function(getComponent) {

    return class extends React.Component {

        static defaultProps = {
            spinner : Spinner
        };

        state = {};

        componentWillMount() {
            getComponent().then(component => this.setState({component}));
        }

        render() {
            return !this.state.component ? React.createElement(this.props.spinner) : React.createElement(this.state.component);
        }
    }
}