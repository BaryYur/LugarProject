import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SecondSliderContainer.css';
import person from '../images/person.png';
import cavs from '../images/cavs.png';

function SecondSliderContainer () {
    return (
        <div className="second-slide-main-container">
            <div className="second-slide__header">
                <h2>Few smiles and comment</h2>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>
            <Splide
                options={ {
                    type: 'loop',
                    pagination: false,
                    perPage: 1,
                    perMove: 1,
                }}
            >
                <SplideSlide>
                    <div className="sec-slide-container">
                        <div>
                            <img src={person} alt="first-person" />
                        </div>
                        <div>
                            <img src={cavs} alt="cavs" />
                            <h3>Dream house isn’t dream anymore</h3>
                            <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                            <p>Brooklyn Simmons</p>
                            <p>Artist</p>
                        </div>                    
                    </div>
                </SplideSlide>
                <SplideSlide></SplideSlide>
            </Splide>
        </div>
    );
};

export default SecondSliderContainer;