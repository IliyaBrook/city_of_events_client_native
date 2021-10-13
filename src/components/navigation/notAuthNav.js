import React, {useEffect, useRef} from 'react'
import {HomePageNotAuth} from "../homePage/homePageNotAuth"
import {RegistrationPage} from "../registrationPage/registrationPage"
import {LoginPage} from "../loginPage/loginPage"
import {createStackNavigator} from "@react-navigation/stack"

export const NotAuthNav = () => {
	const StackNav = createStackNavigator()
	
	const options = (props) => ({
		animationEnabled: false,
		title: props.title,
		headerTitleAlign: 'center',
		headerStyle: {
			backgroundColor: '#37474f',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			...props.headerTitleStyle,
		},
	})
	
	return (
		<StackNav.Navigator
			screenOptions={({navigation}) => {
				return {
					detachPreviousScreen: !navigation.isFocused(),
				}
			}}
		>
			<StackNav.Screen
				name="homeNotAuth"
				component={HomePageNotAuth}
				options={{
					...options({
						title: 'Social City',
						headerTitleStyle: {
							fontFamily: 'AbrilFatface_400Regular',
							fontSize: 32,
							textShadowColor: 'black',
							textShadowOffset: {width: -5, height: 3},
							textShadowRadius: 3,
						}
					})
				}}
			/>
			
			<StackNav.Screen
				name="registration"
				component={RegistrationPage}
				options={{
					...options({
						title: 'Registration',
						headerTitleStyle: {
							fontSize: 32,
							textShadowColor: 'black',
						}
					})
				}}
			/>
			<StackNav.Screen
				name="login"
				component={LoginPage}
				options={{
					...options({
						title: 'Login',
						headerTitleStyle: {
							fontSize: 30,
							textShadowColor: 'black',
							letterSpacing: 2,
						}
					})
				}}
			/>
		</StackNav.Navigator>
	)
}

export default NotAuthNav
