import * as React from "react";
import classNames from "classnames";
import { autobind } from "core-decorators";

import "./ResponsiveImage.scss";

export default class ResponsiveImage extends React.Component {

    timeoutIds = [];

    state = {
        loaded : false,
        showImage : !this.props.delay || this.props.delay <= 0
    };

    componentWillMount() {
        if(this.props.delay > 0) {
            const timeoutId = setTimeout(() => this.setState({ showImage : true }), this.props.delay);
            this.timeoutIds.push(timeoutId);
        }
    }

    componentWillUnmount() {
        this.timeoutIds.forEach(t => clearInterval(t));
    }

    @autobind
    loaded() {
        this.setState({ loaded : true }, this.props.afterLoad && this.props.afterLoad());
    }

    renderImage() {
        if(!this.state.showImage) {
            return null;
        }

        const firstSrcIndex =  Object.keys(this.props.sources)[0];
        const src = this.props.sources[this.props.defaultSize] || this.props.sources[this.props.defaultSize + "w"] || this.props.sources[firstSrcIndex];

        return (
            <img
                ref={ c => { this.image = c } }
                src={src}
                sizes={this.props.sizes}
                srcSet={this.props.srcset}
                className={classNames("responsive-image", { loaded : this.state.loaded })}
                onLoad={this.loaded}/>
        )
    }

    render() {
        const { loaded } = this.state;

        return(
            <div className={ classNames("responsive-image__wrapper", { loaded }, this.props.className) }>
                <img src={this.props.placeholder.url}
                     className={classNames("responsive-image__placeholder", { loaded })} />
                { this.renderImage() }
            </div>
        )
    }
}