import React from 'react';

import { SplideSlide } from '@splidejs/react-splide';

import cavs from '../images/cavs.png';

function SecondSplideSlide (props) {
    return (
        <SplideSlide>
        <div className="sec-slide-container">
            <div className="lf__sec-slide-cont">
                <img src={props.img} alt="first-person" />
            </div>
            <div className="rg__sec-slide-cont">
                <img src={cavs} alt="cavs" />
                <h3>{props.h3}</h3>
                <p>{props.description}</p>
                <p>{props.name}</p>
                <p>{props.who}</p>
            </div>                    
        </div>
        </SplideSlide>
    )
};

export default SecondSplideSlide;