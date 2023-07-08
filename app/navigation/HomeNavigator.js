import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeStack/HomeScreen';
import EditScreen from '../screens/HomeStack/EditScreen';
import AppColors from '../config/AppColors';


const AppStack = createNativeStackNavigator();

const HomeNavigator = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "EditScreen"){
            navigation.setOptions({tabBarStyle: {display: 'none'},});
        }
        else{
            navigation.setOptions({tabBarStyle: {
                backgroundColor: AppColors.background,
                height: 58 + insets.bottom,
                paddingBottom: insets.bottom + 5,
              },});
        }
    }, [navigation, route]);

    return (
    <AppStack.Navigator>
        <AppStack.Screen 
            name="HomeScreen"   
            component={HomeScreen} 
            options={{
                headerShown:false,}}/>
        <AppStack.Screen 
            name="EditScreen" 
            component={EditScreen} 
            options={{ 
                headerShown:false,
                animation: 'slide_from_bottom',}}/>
    </AppStack.Navigator>)
}

export default HomeNavigator;