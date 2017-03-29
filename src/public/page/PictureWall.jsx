import * as React from "react";

import ResponsiveImage from "../../components/ResponsiveImage";


import "./PictureWall.scss";


const images = [
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/alan-emery-121147.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/ales-krivec-107499.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/alessandro-viaro-94370.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/andrew-phillips-22066.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/arnaud-mesureur-132213.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/arto-marttinen-133621.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/cristian-newman-105293.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/felipe-santana-330.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/jamie-street-202592.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/lemuel-butler-515.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/linda-xu-185627.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/miguel-salgado-160276.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/nasa-89127.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/rob-bye-149891.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20!../../../images/robert-lukeman-150146.jpg'),
    require('@thomas.winckell/srcset-loader?sizes=200w+400w+600w+800w&placeholder=20&blur=120!../../../images/vincent-guth-182001.jpg')
];


let delay = 1000;
const sizes = "25vw";

const delayedImages = images.map( image => { delay += 50; return Object.assign({}, image, { delay, sizes }); } );


export default () => (
    <div className="picture-wall-container">
        <div className="picture-wall">
            { delayedImages.map( (props, key) => <ResponsiveImage {...props} key={key}/> ) }
        </div>
    </div>
)