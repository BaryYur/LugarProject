import React from 'react';

import topMainImg from '../images/first-main-img.png';
import FormContainer from './FormContainer';
import './MainContainer.scss';
import SlideContainer from './SlideContainer';

function MainContainer () {
    return (
        <main>
            <div className="top-main-container">
                <div className="top-main__left-container">
                    <img src={topMainImg} alt="first-house" />
                </div>
                <div className="top-main__right-container">
                    <h2>Award winning real estate company in Dubai</h2>
                    <p className="description">Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    <div className="features-container">
                        <div>
                            <p>Previous projects</p>
                            <p>34+</p>
                        </div>
                        <div>
                            <p>years experience</p>
                            <p>20y</p>
                        </div>
                        <div>
                            <p>Ongoing projects</p>
                            <p>12</p>
                        </div>
                    </div>
                </div>
            </div>
            <SlideContainer />
            <FormContainer />
        </main>
    );
};

export default MainContainer;