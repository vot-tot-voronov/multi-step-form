import React from 'react';

import './first-step.css';

const FirstStep = ({state, handleChange}) => {
    const {email, currentStep} = state;
    if(currentStep !== 1) {
        return null
    }

    return (
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={email} // Prop: The email input data
            onChange={handleChange} // Prop: Puts data into state
            />
        </div>
    );
};

export default FirstStep;

