import {
	CLEAR_REGISTRATION_VALIDATOR,
	SET_REGISTRATION_ERRORS,
	SET_REGISTRATION_INPUTS
} from "./validatorRegistrationTypes"

export const validatorRegistrationReducerInit = {
	registrationInputs: {
		email: '',
		password: '',
		confirmPassword: '',
		name: ''
	},
	errors: {},
}


export const validatorRegistrationReducer = (state = validatorRegistrationReducerInit, action) => {
	switch (action.type) {
		case SET_REGISTRATION_INPUTS:
			return {...state, registrationInputs: {...state.registrationInputs, ...action.payload}}
		case CLEAR_REGISTRATION_VALIDATOR:
			return validatorRegistrationReducerInit
		case SET_REGISTRATION_ERRORS:
			return {...state, errors: {...action.payload}}
		default:
			return state
	}
}
