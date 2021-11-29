import React from 'react';

import './SliderContainer.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import fSlide from '../images/f-slider.png';
import secSlide from '../images/s-slider.png';
import thSlide from '../images/th-slider.png';
// import ftSlide from '../images/ft-slider.png';
// import fvSlide from '../images/fv-slider.png';

function SliderContainer () {
    return (
        <div className="slider-main-container">
            <div className="slide__header">
                <h2>Ongoing projects</h2>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>
            <Splide
                options={ {
                    type: 'loop',
                    pagination: false,
                    perPage: 3,
                    perMove: 1,
                    gap: "30px",
                    breakpoints: {
                        1400: {
                            focus: 'center',
                            trimSpace  : false,
                        },
                        1200: {
                            focus: 'center',
                        },
                        1150: {
                            perPage: 2
                        },
                        700: {
                            perPage: 1
                        }
                    }
                } }
            >
                <SplideSlide>
                    <div className="slide-container">
                        <img src={fSlide} alt="first-slide" />
                        <div className="slide-title-box">
                            <p>Vintage Villa</p>
                            <p>2715 Ash Dr. San Jose, Dubai</p>
                        </div>
                    </div>                    
                </SplideSlide>
                <SplideSlide>
                    <div className="slide-container">
                        <img src={secSlide} alt="second-slide" />
                        <div className="slide-title-box">
                            <p>Tonga Villa</p>
                            <p>1901 Thornridge Cir. Shiloh 81063</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slide-container">
                        <img src={thSlide} alt="third-slide" />
                        <div className="slide-title-box">
                            <p>Penthouse</p>
                            <p>2464 Royal Ln. Mesa, 45463</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slide-container">
                        <img src={fSlide} alt="fourth-slide" />
                        <div className="slide-title-box">
                            <p>Smart house</p>
                            <p>2715 Ash Dr. San Jose, Dubai</p>
                        </div>                    
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slide-container">
                        <img src={secSlide} alt="five-slide" />
                        <div className="slide-title-box">
                            <p>Just house</p>
                            <p>Some text</p>
                        </div>                    
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default SliderContainer;