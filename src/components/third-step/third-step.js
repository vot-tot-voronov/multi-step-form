import React from 'react';

import './third-step.css';

const ThirdStep = ({state, handleChange}) => {
    const {password, currentStep} = state;
    if(currentStep !== 3) {
        return null
    }

    return (
        <div className="form-group">
            <label htmlFor="password">Password address</label>
            <input 
            className="form-control"
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
            value={password} // Prop: The password input data
            onChange={handleChange} // Prop: Puts data into state
            />
            <button className="btn btn-success btn-block">Sign up</button>
        </div>
    );
};

export default ThirdStep;