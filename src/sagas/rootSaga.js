import {all, fork} from 'redux-saga/effects'
import {registrationSaga} from "./registration/registrationSaga"

export function* rootSaga () {
	yield all([
		fork(registrationSaga)
	])
}
