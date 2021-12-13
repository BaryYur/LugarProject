// import React, { useState, useEffect , useCallback} from 'react';
import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SecondSliderContainer.css';
import SecondSplideSlide from './SecondSplideSlide';

function SecondSliderContainer () {
    //CODE FOR SERVER 

    // const [sliderData, setSliderData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();

    // const fetchDataHandler = useCallback(async () => {  //get request
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //       const response = await fetch('server-http/slider-data.json');
    //       if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //       };
    
    //       const data = await response.json();
    
    //       const loadedData = []; //массыв с данными которые получт сервер чер POST запрос
    
    //       for (const key in data) {  //данные котрые получит сервер и отправит обратно
    //         loadedData.push({ 
    //           id: data[key].id,
    //           h3: data[key].h3,
    //           description: data[key].description,
    //           name: data[key].name,
    //           who: data[key].who
    //         });
    //       }
    
    //       setSliderData(loadedData);  //эти данные
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //     setIsLoading(false);
    // }, []);
    
    // useEffect(() => {
    //     fetchDataHandler();
    // }, [fetchDataHandler]);


    const DUMMY__DATA = [
        {
            id: 'id1',
            h3:'Dream house isn’t dream anymore',
            description: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
            name:'Brooklyn Simmons',
            who:'Artist'
        },
        {
            id: 'id2',
            h3:'Dream house isn’t dream anymore',
            description: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
            name:'Barry Alen',
            who:'Artist'
        },
    ];

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
                    breakpoints: {
                        600: {
                            pagination: true,
                            arrows: false
                        }
                    }
                }}
            >
                {DUMMY__DATA.map(item => (
                    <SecondSplideSlide
                        key={item.id}
                        h3={item.h3}
                        description={item.description}
                        name={item.name}
                        who={item.who}
                    />
                ))}
                {/* {isLoading && <p className="loading-p">Loading...</p>}
                {!isLoading && error && <p className="error-p">{error}</p>} */}
            </Splide>
        </div>
    );
};

export default SecondSliderContainer;