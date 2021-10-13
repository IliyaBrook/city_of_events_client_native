import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from "react-redux"
import SubscriptionsProfile from "../profilePage/subscriptionsProfile"
import UsersProfile from "../profilePage/usersProfile"
import EventsProfile from "../profilePage/eventsProfile"
import AddEventsProfile from "../profilePage/addEventsProfile"


const ProfileNav = () => {
	const DrawerProfileNav = createDrawerNavigator()
	const role = useSelector(state => state.userDataReducer.role)
	
	return (
		<DrawerProfileNav.Navigator
			initialRouteName="Subscriptions"
			screenOptions={{
				headerTitleStyle: {
					display: 'none',
				},
				headerStyle: {
					backgroundColor: '#37474f'
				},
				headerTintColor: '#fff',
			}}>
			<DrawerProfileNav.Screen name="Subscriptions" component={SubscriptionsProfile}/>
			{
				role === 'admin' && <>
					<DrawerProfileNav.Screen name="Users" component={UsersProfile}/>
					<DrawerProfileNav.Screen name="Events" component={EventsProfile}/>
					<DrawerProfileNav.Screen name="Add event" component={AddEventsProfile}/>
				</>
			}
		</DrawerProfileNav.Navigator>
	)
}

export default ProfileNav
