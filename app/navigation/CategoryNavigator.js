import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesStack/CategoriesScreen';
import CategoryViewScreen from '../screens/CategoriesStack/CategoryViewScreen';
import CharityScreen from '../screens/CharitiesStack/CharityScreen';

const AppStack = createNativeStackNavigator();

const CategoryNavigator = () => {
    return (
    <AppStack.Navigator>
        <AppStack.Screen 
        name="Category" 
        component={CategoriesScreen} 
        options={{headerShown:false,}}/>
        <AppStack.Screen 
            name="CategoryView" 
            component={CategoryViewScreen} 
            options={{headerShown:false,animation: 'slide_from_right'}}/>
         <AppStack.Screen 
            name="Charity" 
            component={CharityScreen} 
            options={{headerShown:false,animation: 'slide_from_right'}}/>
    </AppStack.Navigator>)
}

export default CategoryNavigator;