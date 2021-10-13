import {
	CLEAR_REG_ERROR_EMAIL,
	CLEAR_REG_ERROR_NAME,
	CLEAR_REG_ERROR_PASS_CONFIRM,
	CLEAR_REG_ERROR_PASSWORM,
	CLEAR_REGISTRATION_VALIDATOR,
	SET_REG_ERROR_EMAIL,
	SET_REG_ERROR_NAME,
	SET_REG_ERROR_PASS_CONFIRM,
	SET_REG_ERROR_PASSWORM, SET_REG_INPUT_EMAIL,
	SET_REG_INPUT_NAME,
	SET_REG_INPUT_PASS_CONFIRM,
	SET_REG_INPUT_PASSWORD,
} from "./validatorRegistrationTypes"

export const validatorRegistrationReducerInit = {
	registrationInputs: {
		email: '',
		password: '',
		confirmPassword: '',
		name: ''
	},
	errors: {
	
	},
}


export const validatorRegistrationReducer = (state = validatorRegistrationReducerInit, action) => {
	switch (action.type) {
		case SET_REG_INPUT_EMAIL:
			return {...state, registrationInputs: {...state.registrationInputs, email: action.payload}}
		case SET_REG_INPUT_PASSWORD:
			return {...state, registrationInputs: {...state.registrationInputs, password: action.payload}}
		case SET_REG_INPUT_PASS_CONFIRM:
			return {...state, registrationInputs: {...state.registrationInputs, confirmPassword: action.payload}}
		case SET_REG_INPUT_NAME:
			return {...state, registrationInputs: {...state.registrationInputs, name: action.payload}}
		case SET_REG_ERROR_EMAIL:
			return {...state, errors: {...state.errors, email: action.payload}}
		case SET_REG_ERROR_PASSWORM:
			return {...state, errors: {...state.errors, password: action.payload}}
		case SET_REG_ERROR_PASS_CONFIRM:
			return {...state, errors: {...state.errors, confirmPassword: action.payload}}
		case SET_REG_ERROR_NAME:
			return {...state, errors: {...state.errors, name: action.payload}}
		case CLEAR_REG_ERROR_EMAIL:
			const {email,...newEmailError} = state.errors
			return {...state, errors: newEmailError }
		case CLEAR_REG_ERROR_PASSWORM:
			const {password,...newPasswordError } = state.errors
			return {...state, errors: newPasswordError }
		case CLEAR_REG_ERROR_PASS_CONFIRM:
			const {confirmPassword,...newPssConfirmError } = state.errors
			return {...state, errors: newPssConfirmError }
		case CLEAR_REG_ERROR_NAME:
			const {name,...newNameError } = state.errors
			return {...state, errors: newNameError}
		case CLEAR_REGISTRATION_VALIDATOR:
			return validatorRegistrationReducerInit
		
		
		default:
			return state
	}
}
