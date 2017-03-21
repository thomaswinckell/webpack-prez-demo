import * as React from "react";

import ResponsiveImage from "../../components/ResponsiveImage";


const images = [{
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/alan-emery-121147.jpg'),
    image : require('../../../images/alan-emery-121147.jpg'),
    style : { width : 400 },
    delay : 500
}, {
    responsiveImage : require('resize-image-loader?sizes[]=500w&placeholder=20&blur=120!../../../images/ales-krivec-107499.jpg'),
    image : require('../../../images/ales-krivec-107499.jpg'),
    style : { width : 500 },
    delay : 1000
}, {
    responsiveImage : require('resize-image-loader?sizes[]=300w&placeholder=20&blur=120!../../../images/alessandro-viaro-94370.jpg'),
    image : require('../../../images/alessandro-viaro-94370.jpg'),
    style : { width : 300 },
    delay : 1500
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/andrew-phillips-22066.jpg'),
    image : require('../../../images/andrew-phillips-22066.jpg'),
    style : { width : 400 },
    delay : 2500
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/arnaud-mesureur-132213.jpg'),
    image : require('../../../images/arnaud-mesureur-132213.jpg'),
    style : { width : 400 },
    delay : 3000
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/arto-marttinen-133621.jpg'),
    image : require('../../../images/arto-marttinen-133621.jpg'),
    style : { width : 400 },
    delay : 3500
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/cristian-newman-105293.jpg'),
    image : require('../../../images/cristian-newman-105293.jpg'),
    style : { width : 400 },
    delay : 4000
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/felipe-santana-330.jpg'),
    image : require('../../../images/felipe-santana-330.jpg'),
    style : { width : 400 },
    delay : 4500
}, {
    responsiveImage : require('resize-image-loader?sizes[]=400w&placeholder=20&blur=120!../../../images/jamie-street-202592.jpg'),
    image : require('../../../images/jamie-street-202592.jpg'),
    style : { width : 400 },
    delay : 4500
}];


export default class Huge extends React.Component {


    render() {
        return(
            <div style={{display: "flex"}}>
                { images.map( (props, key) => <ResponsiveImage {...props} key={key}/> ) }
            </div>
        )
    }
}