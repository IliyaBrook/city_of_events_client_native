import {
	CLEAR_LOGIN_INPUT_ERROR_EMAIL, CLEAR_LOGIN_INPUT_ERROR_PASSWORM,
	CLEAR_LOGIN_VALIDATOR,
	SET_LOGIN_INPUT_EMAIL,
	SET_LOGIN_INPUT_ERROR_EMAIL, SET_LOGIN_INPUT_ERROR_PASSWORM,
	SET_LOGIN_INPUT_INPUT_PASSWORD,
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
		case SET_LOGIN_INPUT_EMAIL:
			return {...state, loginInputs: {...state.loginInputs, email: action.payload}}
		case SET_LOGIN_INPUT_INPUT_PASSWORD:
			return {...state, loginInputs: {...state.loginInputs, password: action.payload}}
		case SET_LOGIN_INPUT_ERROR_EMAIL:
			return {...state, errors: {...state.errors, email: action.payload}}
		case SET_LOGIN_INPUT_ERROR_PASSWORM:
			return {...state, errors: {...state.errors, password: action.payload}}
		case CLEAR_LOGIN_INPUT_ERROR_EMAIL:
			const {email, ...newEmailError} = state.errors
			return {...state, errors: newEmailError}
		case CLEAR_LOGIN_INPUT_ERROR_PASSWORM:
			const {password, ...newPasswordError} = state.errors
			return {...state, errors: newPasswordError}
		case CLEAR_LOGIN_VALIDATOR:
			return validatorLoginReducerInit
		default:
			return state
	}
}
