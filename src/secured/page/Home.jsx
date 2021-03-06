import * as React from "react";
import { FormattedMessage } from "react-intl";


export default () => (
    <div className="jumbotron">
        <h1 className="display-3">
            <FormattedMessage id="secured.home.title"/>
        </h1>
        <p className="lead">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
    </div>
)