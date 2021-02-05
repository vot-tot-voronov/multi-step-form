const initialState = {
    currentStep: 1,
    email: '',
    username: '',
    password: ''
}

const reducer = (state, action) => {
    const {currentStep} = state;
    
    switch (action.type) {
        case "email":
            return {...state, email: action.payload};
        case "username":
            return {...state, username: action.payload};
        case "password":
            return {...state, password: action.payload};
        case "currentStepUp":
            return {...state, currentStep: currentStep + 1};
        case "currentStepDown":
            return {...state, currentStep: currentStep - 1};
        default:
            throw new Error();
    }
}

export {
    initialState,
    reducer
}