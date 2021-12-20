import React from 'react';

import FormContainer from './FormContainer';
import SecondSliderContainer from './SecondSliderContainer';
import SliderContainer from './SliderContainer';
import TopMainContainer from './TopMainContainer';

function MainContainer () {
    return (
        <main>
            <TopMainContainer />
            <SliderContainer />
            <SecondSliderContainer />
            <FormContainer />
        </main>
    );
};

export default MainContainer;