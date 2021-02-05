const inputHandlerChange = (name, value) => {
    return {type: name, payload: value}
};

const nextStep = () => {
    return {type: 'currentStepUp'}
};

const prevStep = () => {
    return {type: 'currentStepDown'}
};

export {
    inputHandlerChange,
    nextStep,
    prevStep
}