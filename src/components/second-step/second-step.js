import React from 'react';

import './second-step.css';

const SecondStep = ({state, handleChange}) => {
    const {username, currentStep} = state;
    if(currentStep !== 2) {
        return null
    }

    return (
        <div className="form-group">
            <label htmlFor="username">Username address</label>
            <input 
            className="form-control"
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={username} // Prop: The username input data
            onChange={handleChange} // Prop: Puts data into state
            />
        </div>
    );
};

export default SecondStep;