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

    renderImage(srcset) {
        if(!this.state.showImage) {
            return null;
        }
        return (
            <img
                ref={ c => { this.image = c } }
                src={this.props.image}
                srcSet={srcset}
                className={classNames("responsive-image", { loaded : this.state.loaded })}
                onLoad={() => this.setState({loaded:true})}/>
        )
    }

    render() {
        // FIX resize-image-loader...
        const responsiveImage = JSON.parse(this.props.responsiveImage.toString());

        const { loaded } = this.state;

        return(
            <div style={this.props.style} className={ classNames("responsive-image__wrapper", { loaded }, this.props.className) }>
                <img src={responsiveImage.placeholder}
                    className={classNames("responsive-image__placeholder", { loaded })} />
                { this.renderImage(responsiveImage.srcset) }
            </div>
        )
    }

    /*render() {
        // TODO :refactor
        return(
            <div style={{position:'relative'}}>
                <img
                    src={this.props.responsiveImage.placeholder}
                    style={{ opacity:(this.state.loaded ? 0 : 1),
                             transition: 'opacity 300ms ease-out',
                             position:'absolute'}} />
                <img
                    src={this.props.image}
                    srcSet={this.props.responsiveImage.srcset}
                    style={{ opacity:(this.state.loaded ? 1 : 0),
                             transition: 'opacity 300ms ease-in',
                             position:'absolute'}}
                    onLoad={() => this.setState({loaded:true})} />
            </div>
        )
    }*/
}