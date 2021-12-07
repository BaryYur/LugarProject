import React, { useRef } from 'react';

import './FormContainer.css';
import houseForm from '../images/house-form.png';
import useInput from '../hooks/form-hook';

function FormContainer (props) {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const phoneNumberRef = useRef('');
    const emailRef = useRef('');
    const descriptionRef = useRef('');

    const {
        value: enteredName,
        reset: resetNameInput,
        valueChangeHandler: nameChangedHandler, 
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLastName,
        reset: resetLastNameInput,
        valueChangeHandler: lastNameChangedHandler, 
    } = useInput(value => value.trim() !== '');

    const { 
        value: enteredEmail, 
        isValid: enteredEmailIsValid,
        reset: resetEmailInput,
        valueChangeHandler: emailChangedHandler, 
    } = useInput(value => value.trim().includes('@'));

    const {
        value: enteredPhoneNumber,
        reset: resetPhoneNumberInput,
        valueChangeHandler: phoneNumberChangedHandler, 
    } = useInput(value => value.trim().length === 10);

    const {
        value: enteredDescription,
        reset: resetDescriptionInput,
        valueChangeHandler: descriptionChangedHandler, 
    } = useInput(value => value.trim() !== '');

    async function addUserHandler(user) { //Post request
        const response = await fetch('https://new-react-http-34a9d-default-rtdb.firebaseio.com/users.json', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!enteredEmailIsValid) {
            return;
        };

        const user = {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        };

        resetNameInput();
        resetEmailInput();
        resetLastNameInput();
        resetPhoneNumberInput();
        resetDescriptionInput();
        
        addUserHandler(user);
    }

    return (
        <div className="form-container">
            <div className="lf__form-container">
                <img src={houseForm} alt="house-form" />
            </div>
            <div className="rg__form-container">
                <form onSubmit={submitHandler}>
                    <h2>Contact us</h2>
                    <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    <div>
                        <input 
                            placeholder="First name" 
                            type="text" 
                            name="first_name"
                            ref={nameRef}
                            value={enteredName}
                            onChange={nameChangedHandler}
                        />
                        <input 
                            placeholder="Last name" 
                            type="text" 
                            name="last_name" 
                            ref={lastNameRef}
                            value={enteredLastName}
                            onChange={lastNameChangedHandler}
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Email address" 
                            type="email" 
                            name="email" 
                            ref={emailRef}
                            value={enteredEmail}
                            onChange={emailChangedHandler}
                        />
                        <input 
                            placeholder="Phone number" 
                            type="text" 
                            name="phone_number" 
                            ref={phoneNumberRef}
                            value={enteredPhoneNumber}
                            onChange={phoneNumberChangedHandler}
                        />
                    </div>
                    <textarea 
                        name="textarea" 
                        placeholder="Description"
                        ref={descriptionRef}
                        value={enteredDescription}
                        onChange={descriptionChangedHandler}
                    >
                    </textarea>
                    <div>
                        <button>Get a quote</button>
                        <p>We don't sell your email and spam.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormContainer;