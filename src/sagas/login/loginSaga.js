import {call, delay, put, takeEvery} from 'redux-saga/effects'
import {CLEAR_LOGIN_VALIDATOR, SET_FORM_CONFIRMED_LOGIN} from "../../redux/forms/validatorLoginForm/validatorLoginTypes"
import {server} from "../../../config/config.json"
import {showToast} from "../../use/showToast"
import {storageManager} from "../../use/storageManager"
import {SET_USER_DATA} from "../../redux/userData/userDataTypes"

export function* loginSaga() {
	yield call(loginSagaWatcher)
}

function* loginSagaWatcher() {
	yield takeEvery(SET_FORM_CONFIRMED_LOGIN, loginSagaWorker)
}


function* loginSagaWorker(userData) {
	try {
		const response = yield call(fetch, `${server}/login`, {
			method: 'POST', headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData.payload)
		})
		const jsonData = yield call([response, response.json])
		
		if (!response.ok) {
			return yield call(showToast, Object.values(jsonData)[0])
		}
		yield put({type: CLEAR_LOGIN_VALIDATOR})
		yield call(showToast, `Welcome ${jsonData.name}`)
		delay(500)
		yield storageManager({operation: 'set', key: 'userData', data: jsonData})
		yield put({type: SET_USER_DATA, payload: {...jsonData, isAuth: true}})
	} catch (error) {
		yield call(showToast, JSON.stringify(error))
	}
}



