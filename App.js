import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  const [loaded] = useFonts({
    'Lato': require('./app/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./app/assets/fonts/Lato-Bold.ttf'),
    'Montserrat': require('./app/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
     </SafeAreaProvider>
  );
}

