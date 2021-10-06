import {
	CLEAR_LOGIN_VALIDATOR,
	SET_LOGIN_ERRORS,
	SET_LOGIN_INPUTS
} from "./validatorLoginTypes"

export const validatorLoginReducerInit = {
	loginInputs: {
		email: '',
		password: '',
	},
	errors: {},
}

export const validatorLoginReducer = (state = validatorLoginReducerInit, action) => {
	switch (action.type) {
		case SET_LOGIN_INPUTS:
			return {...state, loginInputs: {...state.loginInputs, ...action.payload}}
		case CLEAR_LOGIN_VALIDATOR:
			return validatorLoginReducerInit
		case SET_LOGIN_ERRORS:
			return {...state, errors: {...action.payload}}
		default:
			return state
	}
}
