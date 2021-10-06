import React from 'react'
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './src/redux/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import MainStack from './src/navigation'
import {useFonts} from 'expo-font';
import {AbrilFatface_400Regular} from '@expo-google-fonts/dev'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./src/sagas/rootSaga"
import {registrationValidatorMiddleware} from "./src/redux/middlewares/registrationValidatorMiddleware"
import {loginValidatorMiddleware} from "./src/redux/middlewares/loginValidatorMiddleware"


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
	thunk,sagaMiddleware, registrationValidatorMiddleware, loginValidatorMiddleware
)))

sagaMiddleware.run(rootSaga)

export default function App() {
	
	const [loaded] = useFonts({
		AbrilFatface_400Regular,
	});
	
	if (!loaded) {
		console.log('font loading..')
		return null;
	}
	
	return (
		<Provider store={store}>
			<MainStack/>
		</Provider>
	);
}
