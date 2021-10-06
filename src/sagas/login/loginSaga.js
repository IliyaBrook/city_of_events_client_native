import {all,fork} from 'redux-saga/effects'
import {registrationSaga} from "../registration/registrationSaga"

export function* loginSaga () {
	yield all([
		fork(loginSaga),registrationSaga()
	])
}
