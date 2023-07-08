import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const AppStack = createNativeStackNavigator();

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import AppColors from '../config/AppColors';

const AuthNavigator = () => {
    return (
    <AppStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: AppColors.background,
            },
            headerTintColor: '#fff',
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: "Montserrat-Bold"
            },
        }}
        >
        <AppStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{headerShown:false}}/>
        <AppStack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{animation: 'slide_from_right'}}/>
        <AppStack.Screen 
            name="Main App" 
            component={TabNavigator} 
            options={{animation: 'fade', headerShown:false}}/>
    </AppStack.Navigator>)
}

export default AuthNavigator;