import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SecondSliderContainer.css';

function SecondSliderContainer () {
    return (
        <div className="second-slide-main-container">
            <div className="second-slide__header">
                <h2></h2>
                <p></p>
            </div>
            <Splide
                options={ {
                    type: 'loop',
                    pagination: false,
                    perPage: 1,
                    perMove: 1,
                } }
            >
                <SplideSlide>
                    <div></div>
                    <div></div>                    
                </SplideSlide>
                <SplideSlide></SplideSlide>
            </Splide>
        </div>
    );
};

export default SecondSliderContainer;