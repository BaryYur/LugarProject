import React from 'react';

import './FormContainer.css';
import houseForm from '../images/house-form.png';

function FormContainer () {
    return (
        <div className="form-container">
            {/* <div>
                <img src={houseForm} alt="house-form" />
            </div>
            <form>
                <h2>Contact us</h2>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                <div>
                    <input 
                        placeholder="First name" 
                        type="text" 
                        name="first__name"
                    />
                    <input 
                        placeholder="Last name" 
                        type="text" 
                        name="last__name" 
                    />
                </div>
                <div>
                    <input 
                        placeholder="Emal address" 
                        type="email" 
                        name="email" 
                    />
                    <input 
                        placeholder="Phone number" 
                        type="text" 
                        name="phone__number" 
                    />
                </div>
                <textarea name="textarea" placeholder="Description"></textarea>
                <div>
                    <button>Get a quote</button>
                    <p>We don't sell your email and spam.</p>
                </div>
            </form> */}
        </div>
    );
};

export default FormContainer;