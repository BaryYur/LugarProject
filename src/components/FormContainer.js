import React, { useState } from 'react';

import './FormContainer.css';
import houseForm from '../images/house-form.png';
import Form from './Form';

function FormContainer () {
    const [isLoading, setIsLoading] = useState(false);

    async function addUserHandler(user) { //Post request
        setIsLoading(true);
        const response = await fetch('https://the-last-one-24fac-default-rtdb.firebaseio.com/users.json', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
    };

    return (
        <div className="form-container">
            <div className="lf__form-container">
                <img src={houseForm} alt="house-form" />
            </div>
            <div className="rg__form-container">
                <Form loading={isLoading} onAddUser={addUserHandler} />
            </div>
        </div>
    );
};

export default FormContainer;