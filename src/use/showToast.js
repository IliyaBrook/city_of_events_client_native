import React from 'react'
import {Toast} from "native-base"

export const showToast = (text, placement = 'bottom') => {
	Toast.show({
		description: text,
		buttonText: 'Okay',
		duration: 2000,
		placement
	})
	return null
}
