import {
	CLEAR_LOGIN_INPUT_ERROR_EMAIL,
	CLEAR_LOGIN_INPUT_ERROR_PASSWORM,
	SET_FORM_CONFIRMED_LOGIN,
	SET_LOGIN_INPUT_EMAIL,
	SET_LOGIN_INPUT_ERROR_EMAIL,
	SET_LOGIN_INPUT_ERROR_PASSWORM,
	SET_LOGIN_INPUT_INPUT_PASSWORD,
	SUBMIT_BUTTON_CLICKED_LOGIN
} from "../forms/validatorLoginForm/validatorLoginTypes"
import validator from "validator/es"


export const loginValidatorMiddleware = ({dispatch, getState}) => next => action => {
	const {email, password} = getState().validatorLoginReducer.loginInputs
	
	switch (action.type) {
		case SET_LOGIN_INPUT_EMAIL:
			validator.isEmail(action.payload) && dispatch({type:CLEAR_LOGIN_INPUT_ERROR_EMAIL})
			break
		case SET_LOGIN_INPUT_INPUT_PASSWORD:
			validator.isLength(action.payload, {min: 1}) && dispatch({type:CLEAR_LOGIN_INPUT_ERROR_PASSWORM})
			break
		case SUBMIT_BUTTON_CLICKED_LOGIN:
			const validate = () => {
				if (!validator.isEmail(email)) {
					dispatch({type: SET_LOGIN_INPUT_ERROR_EMAIL, payload: 'Please enter email'})
					return false
				} else if (!validator.isLength(password, {min: 1})) {
					dispatch({type: SET_LOGIN_INPUT_ERROR_PASSWORM, payload: 'Password password'})
					return false
				}
				return true
			}
			if (validate()) {
				dispatch({
					type: SET_FORM_CONFIRMED_LOGIN, payload: { email, password }
				})
			}
	}
	return next(action)
}
