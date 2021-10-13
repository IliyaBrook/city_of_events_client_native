import {all, fork} from 'redux-saga/effects'
import {registrationSaga} from "./registration/registrationSaga"
import {loginSaga} from "./login/loginSaga"
import {refreshPageSaga} from "./refreshPage/refreshPageSaga"

export function* rootSaga () {
	yield all([
		fork(registrationSaga),
		fork(loginSaga),
		fork(refreshPageSaga),
	])
}
