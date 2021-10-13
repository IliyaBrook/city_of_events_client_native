import AsyncStorage from "@react-native-async-storage/async-storage"
import {useToast} from "native-base"
import {showToast} from "./showToast"

export const storageManager = async (props) => {
	try {
		switch (props.operation) {
			case 'set':
				return await AsyncStorage.setItem(props.key, JSON.stringify(props.data))
			case 'get':
				const storageData = await AsyncStorage.getItem(props.key)
				return JSON.parse(storageData)
			case 'remove':
				return await AsyncStorage.removeItem(props.key)
			default:
				showToast('application storage error')
				return new Error('application local storage error')
		}
	} catch (error) {
		console.log(error)
	}
}
