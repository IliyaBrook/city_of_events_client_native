import {storageManager} from "../../use/storageManager"
import {put} from "redux-saga/effects"
import {SET_USER_DATA} from "../../redux/userData/userDataTypes"

export function* refreshPageSaga () {
	const storageData = yield storageManager({operation: 'get', key:'userData'})
	if (storageData) {
		yield put({type:SET_USER_DATA,payload:{...storageData,isAuth:true}})
	}
}
