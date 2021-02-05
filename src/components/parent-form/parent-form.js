import React, { useReducer } from 'react';

import {initialState, reducer} from '../../reducer';
import {inputHandlerChange, nextStep, prevStep} from '../../actions';
import FirstStep from '../first-step';
import SecondStep from '../second-step';
import ThirdStep from '../third-step';

import './parent-form.css'

const ParentForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChange = (event) => {
        const {name, value} = event.target;
        dispatch(inputHandlerChange(name, value));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Your registration detail: \n 
            Email: ${state.email} \n 
            Username: ${state.username} \n
            Password: ${state.password}`);
    };

    const _next = () => {
        dispatch(nextStep());
    }

    const nextButton = () => {
        const {currentStep} = state;
        if(currentStep <3){
          return (
            <button 
              className="btn" 
              type="button" onClick={_next}>
            Next
            </button>        
          )
        }
        return null;
      }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <FirstStep state={state} handleChange={handleChange}/>
                <SecondStep state={state} handleChange={handleChange}/>
                <ThirdStep state={state} handleChange={handleChange}/>
                {nextButton()}
            </form>
            
        </React.Fragment>
    );
}

export default ParentForm;