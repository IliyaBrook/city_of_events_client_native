

import {
	SET_FORM_CONFIRMED_REGISTRATION,
	SET_REGISTRATION_ERRORS,
	SET_REGISTRATION_INPUTS,
	SUBMIT_BUTTON_CLICKED_REGISTRATION
} from "../forms/validatorRegistrationForm/validatorRegistrationTypes"
import validator from "validator/es"


export const registrationValidatorMiddleware = ({dispatch, getState}) => next => action => {
	switch (action.type) {
		case SET_REGISTRATION_INPUTS:
			return next(action)
		case SUBMIT_BUTTON_CLICKED_REGISTRATION:
			const {email, password, name, confirmPassword} = getState().validatorRegistrationReducer.registrationInputs
			const isEmail = validator?.isEmail(email)
			const passMin5 = validator?.isLength(password, {min: 6})
			const isPassConfirm = password === confirmPassword
			const isName = name.length > 0
			const validate = () => {
				if (!isEmail) {
					dispatch({type: SET_REGISTRATION_ERRORS, payload: {email: 'Please enter a valid email'}})
					return false
				} else if (!passMin5) {
					dispatch({type: SET_REGISTRATION_ERRORS, payload: {password: 'Password minimum 6 length'}})
					return false
				} else if (!isPassConfirm) {
					dispatch({type: SET_REGISTRATION_ERRORS, payload: {confirmPassword: 'Password did not match'}})
					return false
				} else if (!isName) {
					dispatch({type: SET_REGISTRATION_ERRORS, payload: {name: 'Please enter name'}})
					return false
				}
				return true
			}
			if (validate()) {
				dispatch({
					type: SET_FORM_CONFIRMED_REGISTRATION, payload: {email, password, name }
				})
				console.log('form confrimed')
			}
	}
	return next(action)
}


