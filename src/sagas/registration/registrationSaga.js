import {call, takeEvery} from 'redux-saga/effects'
import {SET_FORM_CONFIRMED_REGISTRATION} from "../../redux/forms/validatorRegistrationForm/validatorRegistrationTypes"
import {server} from '../../../config/config.json'
import {showToast} from "../../hooks/useToast"
console.log('config: ', server)
export function* registrationSaga() {
	yield call(registrationSagaWatcher)
}


function* registrationSagaWatcher() {
	yield takeEvery(SET_FORM_CONFIRMED_REGISTRATION, registrationSagaWorker)
}

function* registrationSagaWorker(userData) {
	console.log(userData)
	const request = yield call(fetch, `${server}/registration`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userData.payload)
	})
	const jsonData = yield call([request, request.json])
	yield call(showToast,Object.values(jsonData)[0])
}


// dispatch({type:CLEAR_REGISTRATION_VALIDATOR})
// dispatch({type:SET_REGISTRATION_ERRORS,payload: {}})
