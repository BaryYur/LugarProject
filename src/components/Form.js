import React, { useRef, useEffect, useState } from 'react';

import useInput from '../hooks/form-hook';

function Form (props) {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const phoneNumberRef = useRef('');
    const emailRef = useRef('');
    const descriptionRef = useRef('');

    const [formIsValid, setFormIsValid] = useState(false);

    const {
        value: enteredName,
        reset: resetNameInput,
        valueChangeHandler: nameChangedHandler, 
        isValid: enteredNameIsValid,
        inputBlurHandler: nameBlur,
        hasError: nameInputHasError, 
    } = useInput(value => value.trim().length >= 3);

    const {
        value: enteredLastName,
        reset: resetLastNameInput,
        valueChangeHandler: lastNameChangedHandler, 
        isValid: enteredLastNameIsValid,
        inputBlurHandler: lastNameBlur,
        hasError: lastNameInputHasError, 
    } = useInput(value => value.trim().length >= 3);

    const { 
        value: enteredEmail, 
        isValid: enteredEmailIsValid,
        reset: resetEmailInput,
        valueChangeHandler: emailChangedHandler, 
        inputBlurHandler: emailBlur,
        hasError: emailInputHasError, 
    } = useInput(value => value.trim().includes('@'));

    const {
        value: enteredPhoneNumber,
        reset: resetPhoneNumberInput,
        isValid: enteredPhoneNumberIsValid,
        valueChangeHandler: phoneNumberChangedHandler, 
        inputBlurHandler: phoneNumberBlur,
        hasError: phoneNumberInputHasError, 
    } = useInput(value => value.trim().length === 10);

    const {
        value: enteredDescription,
        reset: resetDescriptionInput,
        valueChangeHandler: descriptionChangedHandler, 
        isValid: enteredDescriptionIsValid,
    } = useInput(value => value.trim().length >= 5);
    
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

        console.log(user);
        
        props.onAddUser(user);
    };

    useEffect(() => {
        if(enteredEmailIsValid && enteredPhoneNumberIsValid && enteredDescriptionIsValid && enteredNameIsValid && enteredLastNameIsValid) { 
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [enteredEmailIsValid, enteredPhoneNumberIsValid, enteredDescriptionIsValid, enteredNameIsValid, enteredLastNameIsValid]);

    return (
        <div>
            {}
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
                            onBlur={nameBlur}
                            className={nameInputHasError ? "invalid-input" : "valid-input"}
                        />
                        <input 
                            placeholder="Last name" 
                            type="text" 
                            name="last_name" 
                            ref={lastNameRef}
                            value={enteredLastName}
                            onChange={lastNameChangedHandler}
                            className={lastNameInputHasError ? "invalid-input" : "valid-input"}
                            onBlur={lastNameBlur}
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
                            onBlur={emailBlur}
                            className={emailInputHasError ? "invalid-input" : "valid-input"}
                        />
                        <input 
                            placeholder="Phone number" 
                            type="text" 
                            name="phone_number" 
                            ref={phoneNumberRef}
                            value={enteredPhoneNumber}
                            onChange={phoneNumberChangedHandler}
                            onBlur={phoneNumberBlur}
                            className={phoneNumberInputHasError ? "invalid-input" : "valid-input"}
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
                        <button disabled={!formIsValid}>Get a quote</button>
                        <p>We don't sell your email and spam.</p>
                        {props.loading && <p className="loading-p-in-form">Loading...</p>}
                    </div>
                </form>
        </div>
    );
};

export default Form;