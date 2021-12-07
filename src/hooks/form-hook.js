import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => { //если было неправильно но ты начал писать то не будет красным
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => { 
      setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError: hasError,
        isValid: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;