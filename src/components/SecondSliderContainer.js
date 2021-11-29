import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SecondSliderContainer.css';
import SecondSplideSlide from './SecondSplideSlide';
import person from '../images/person.png';

const DUMMY__DATA = [
    {
        img: person,
        h3: 'Dream house isn’t dream anymore',
        description: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
        name: 'Brooklyn Simmons',
        who: 'Artist'
    },

];

function SecondSliderContainer () {
    return (
        <div className="second-slider-main-container">
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
                {DUMMY__DATA.map(item => (
                    <SecondSplideSlide
                        img={item.img}
                        h3={item.h3}
                        description={item.description}
                        name={item.name}
                        who={item.who}
                     />
                ))}
            </Splide>
        </div>
    );
};

export default SecondSliderContainer;