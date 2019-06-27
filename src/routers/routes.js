import React, {Component} from 'react';

import {
  createAppContainer,
  DrawerNavigator, 
  createStackNavigator, 
  createDrawerNavigator
} from 'react-navigation';

// import screens
import Login from '../screens/Login/Login'
import Signup from '../screens/Signup/Signup'
import Dashboard from '../screens/Dashboard/Dashboard'
// import custom drawer
import CustomDrawerScreen from '../screens/CustomDrawer/CustomDrawer';


// Setup the stack navigation
const AppScreens = createStackNavigator(
  {
    // list of screens in the app
    Login: {screen: Login},
    Signup: {screen: Signup},
    Dashboard: {screen: Dashboard}
  },
  {
    initialRouteName: "Login"
  }
);

// create Drawer navigater here
export const Drawer = createDrawerNavigator({
  Exampe2: { screen: AppScreens ,navigationOptions: () => ({
    drawerLockMode: 'locked-closed',
    drawerLabel: CustomDrawerScreen,
  }) 
}
},
{
   contentComponent: CustomDrawerScreen,
})
//export default createAppContainer(AppNavigator);
export const MainNavigator = createAppContainer(Drawer);

