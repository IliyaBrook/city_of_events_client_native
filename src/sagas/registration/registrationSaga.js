import {call, takeEvery, put, delay} from 'redux-saga/effects'
import {
	CLEAR_REGISTRATION_VALIDATOR,
	SET_FORM_CONFIRMED_REGISTRATION
} from "../../redux/forms/validatorRegistrationForm/validatorRegistrationTypes"
import {server} from '../../../config/config.json'
import {showToast} from "../../use/showToast"
import {navigationRef} from "../../components/navigation/navigation"


export function* registrationSaga() {
	yield call(registrationSagaWatcher)
}


function* registrationSagaWatcher() {
	yield takeEvery(SET_FORM_CONFIRMED_REGISTRATION, registrationSagaWorker)
}

function* registrationSagaWorker(userData) {
	try {
		const response = yield call(fetch, `${server}/registration`, {
			method: 'POST', headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData.payload)
		})
		const jsonData = yield call([response, response.json])
		yield call(showToast,Object.values(jsonData)[0])
		if (response.ok) {
			yield delay(1000)
			yield put({type:CLEAR_REGISTRATION_VALIDATOR})
			navigationRef.navigate('login')
		}
	}catch (error){
		console.error(error)
		yield call(showToast,JSON.stringify(error))
	}
}
