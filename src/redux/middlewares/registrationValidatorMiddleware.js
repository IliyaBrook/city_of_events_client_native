import {
	CLEAR_REG_ERROR_EMAIL, CLEAR_REG_ERROR_NAME, CLEAR_REG_ERROR_PASS_CONFIRM, CLEAR_REG_ERROR_PASSWORM,
	SET_FORM_CONFIRMED_REGISTRATION,
	SET_REG_ERROR_EMAIL, SET_REG_ERROR_NAME,
	SET_REG_ERROR_PASS_CONFIRM,
	SET_REG_ERROR_PASSWORM,
	SET_REG_INPUT_EMAIL, SET_REG_INPUT_NAME, SET_REG_INPUT_PASS_CONFIRM, SET_REG_INPUT_PASSWORD,
	SUBMIT_BUTTON_CLICKED_REGISTRATION
} from "../forms/validatorRegistrationForm/validatorRegistrationTypes"
import validator from 'validator/es'

export const registrationValidatorMiddleware = ({dispatch, getState}) => next => action => {
	const {email, password, confirmPassword ,name } = getState().validatorRegistrationReducer.registrationInputs
	switch (action.type) {
		case SET_REG_INPUT_EMAIL:
			validator.isEmail(action.payload) && dispatch({type:CLEAR_REG_ERROR_EMAIL})
			break
		case SET_REG_INPUT_PASSWORD:
			validator.isLength(action.payload, {min: 6}) && dispatch({type:CLEAR_REG_ERROR_PASSWORM})
			break
		case SET_REG_INPUT_PASS_CONFIRM:
			password === action.payload && dispatch({type:CLEAR_REG_ERROR_PASS_CONFIRM})
			break
		case SET_REG_INPUT_NAME:
			name.length <= 0 && dispatch({type:CLEAR_REG_ERROR_NAME})
			break
		case SUBMIT_BUTTON_CLICKED_REGISTRATION:
			const validate = () => {
				if (!validator.isEmail(email)) {
					dispatch({type: SET_REG_ERROR_EMAIL, payload: 'Please enter a valid email'})
					return false
				} else if (!validator.isLength(password, {min: 6})) {
					dispatch({type: SET_REG_ERROR_PASSWORM, payload: 'Password minimum 6 length'})
					return false
				}
				else if (password !== confirmPassword) {
					dispatch({type: SET_REG_ERROR_PASS_CONFIRM, payload: 'Password did not match'})
					return false
				} else if (name.length <= 0) {
					dispatch({type: SET_REG_ERROR_NAME, payload: 'Please enter name'})
					return false
				}
				return true
			}
			if (validate()) {
				dispatch({
					type: SET_FORM_CONFIRMED_REGISTRATION, payload: {email, password, name}
				})
			}
	}
	return next(action)
}


