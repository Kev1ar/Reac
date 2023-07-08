import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppColors from '../config/AppColors';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CharityNavigator from './CharityNavigator';
import CategoryNavigator from './CategoryNavigator';
import HomeNavigator from './HomeNavigator';

const TabStack = createBottomTabNavigator();

function TabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <TabStack.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: AppColors.background,
          height: 58 + insets.bottom,
          paddingBottom: insets.bottom + 5,
        },
        headerShown:false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: AppColors.white,
        tabBarInactiveTintColor: AppColors.grey,
      }}>
        <TabStack.Screen 
            name="Home" 
            component={HomeNavigator} 
            options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons 
                            color={focused ? AppColors.white : AppColors.grey}
                            name={focused ? 'home' : 'home-outline'}
                            size={30} />
                    ),}}/>
        <TabStack.Screen 
            name="Charities"
            component={CharityNavigator}
            options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons 
                        name="format-list-text" 
                        color={focused ? AppColors.white : AppColors.grey}
                        size={30} />
                    ),}}/>
        <TabStack.Screen 
            name="Catagories" 
            component={CategoryNavigator} 
            options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons 
                        name="bookshelf"
                        color={focused ? AppColors.white : AppColors.grey}
                        size={30} />
                    ),}}/>
    </TabStack.Navigator>
  );
}

export default TabNavigator;