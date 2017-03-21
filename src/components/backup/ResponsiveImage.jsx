import * as React from "react";
import StackBlur from 'stackblur-canvas';
import classNames from "classnames";

import "./ResponsiveImage.scss";


const speed = 1250;
const blur = 100;
const interval = speed/blur;
console.log(interval)

export default class ResponsiveImage extends React.Component {

    state = {
        loaded : false,
        blur : blur
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.loaded !== this.state.loaded) {
            this.startBlurAnimation();
        } else {
            this.renderImageInCanvas();
        }
    }

    componentWillUnmount() {
        clearInterval(this.blurAnimation);
    }

    startBlurAnimation() {
        this.blurAnimation = setInterval(() => {
            const blur = this.state.blur - 1;
            if (!blur) {
                clearInterval(this.blurAnimation);
            }
            this.setState({ blur });
        }, interval);
    }

    renderImageInCanvas() {
        const { canvas, image } = this;

        if (!canvas || !image) {
            return;
        }

        StackBlur.image(image, canvas, this.state.blur);

        canvas.style.width = `${this.props.width}px`;
        canvas.style.height = `100%`;
    }

    render() {
        // FIX resize-image-loader...
        const responsiveImage = JSON.parse(this.props.responsiveImage.toString());

        const loaded = this.state.loaded && this.canvas && this.image;

        return(
            <div style={{width: this.props.width}} className={ classNames("responsive-image__wrapper", { loaded }) }>
                <img src={responsiveImage.placeholder}
                     style={{width: this.props.width}}
                    className={classNames("responsive-image__placeholder", { loaded })} />
                <img
                    ref={ c => { this.image = c } }
                    src={this.props.image}
                    srcSet={responsiveImage.srcset}
                    style={{width: this.props.width}}
                    className={classNames("responsive-image", { loaded })}
                    onLoad={() => this.setState({loaded:true})}/>
                <canvas ref={ c => { this.canvas = c } } style={{width: this.props.width}} />
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