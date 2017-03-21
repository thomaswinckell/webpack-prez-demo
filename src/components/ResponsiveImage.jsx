import * as React from "react";
import classNames from "classnames";

import "./ResponsiveImage.scss";

export default class ResponsiveImage extends React.Component {

    state = {
        loaded : false,
        showImage : !this.props.delay || this.props.delay <= 0
    };

    componentWillMount() {
        if(this.props.delay > 0) {
            setTimeout(() => this.setState({ showImage : true }), this.props.delay)
        }
    }

    renderImage() {
        if(!this.state.showImage) {
            return null;
        }
        return (
            <img
                ref={ c => { this.image = c } }
                src={this.props.image}
                srcSet={this.props.responsiveImage.srcset}
                className={classNames("responsive-image", { loaded : this.state.loaded })}
                onLoad={() => this.setState({loaded:true})}/>
        )
    }

    render() {
        const { loaded } = this.state;

        return(
            <div style={this.props.style} className={ classNames("responsive-image__wrapper", { loaded }, this.props.className) }>
                <img src={this.props.responsiveImage.placeholder}
                    className={classNames("responsive-image__placeholder", { loaded })} />
                { this.renderImage() }
            </div>
        )
    }
}