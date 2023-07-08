import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import AddScreen from '../screens/CharitiesStack/AddScreen';
import CharityScreen from '../screens/CharitiesStack/CharityScreen';
import CharityListScreen from '../screens/CharitiesStack/CharityListScreen';
import AppColors from '../config/AppColors';

const AppStack = createNativeStackNavigator();

// source: https://stackoverflow.com/questions/51352081/react-navigation-how-to-hide-tabbar-from-inside-stack-navigation
const CharityNavigator = ({ navigation, route }) => {
    // React.useLayoutEffect(() => {
    //     const routeName = getFocusedRouteNameFromRoute(route);
    //     if (routeName === "AddScreen"){
    //         navigation.setOptions({tabBarStyle: {display: 'none'}});
    //     }else {
    //         navigation.setOptions({tabBarStyle: {display: 'flex', backgroundColor:AppColors.background, height:58}});
    //     }
    // }, [navigation, route]);

    return (
    <AppStack.Navigator>
        <AppStack.Screen 
            name="CharityList" 
            component={CharityListScreen} 
            options={{headerShown:false,}}/>
        <AppStack.Screen 
            name="AddScreen" 
            component={AddScreen} 
            options={{headerShown:false,animation: 'slide_from_bottom',}}/>
        <AppStack.Screen 
            name="Charity" 
            component={CharityScreen} 
            options={{headerShown:false,animation: 'slide_from_right'}}/>
    </AppStack.Navigator>)
}

export default CharityNavigator;