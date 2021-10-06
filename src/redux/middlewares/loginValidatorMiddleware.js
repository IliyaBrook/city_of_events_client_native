import {
	CLEAR_LOGIN_VALIDATOR,
	SET_FORM_CONFIRMED_LOGIN,
	SET_LOGIN_ERRORS,
	SET_LOGIN_INPUTS,
	SUBMIT_BUTTON_CLICKED_LOGIN
} from "../forms/validatorLoginForm/validatorLoginTypes"
import validator from 'validator/es'

export const loginValidatorMiddleware = ({dispatch, getState}) => next => action => {
	switch (action.type) {
		case SET_LOGIN_INPUTS:
			return next(action)
		case SUBMIT_BUTTON_CLICKED_LOGIN:
			const { email, password } = getState().validatorLoginReducer.loginInputs
			const isEmail = validator?.isEmail(email)
			const isPassword = validator?.isLength(password,{min:1})
			const validate = () => {
				if (!isEmail) {
					dispatch({type: SET_LOGIN_ERRORS, payload: {email: 'Please enter a valid email'}})
					return false
				} else if (!isPassword) {
					dispatch({type: SET_LOGIN_ERRORS, payload: {password: 'Please enter a password'}})
					return false
				}
				return true
			}
			if (validate()) {
				dispatch({type:CLEAR_LOGIN_VALIDATOR})
				dispatch({type:SET_LOGIN_ERRORS,payload: {}})
				dispatch({type:SET_FORM_CONFIRMED_LOGIN})
				console.log('form confrimed')
			}
	}
	return next(action)
}


