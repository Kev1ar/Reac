import React from 'react';
import { View,} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppColors from '../config/AppColors';


function SafeScreen({children, style}) {
    const insets = useSafeAreaInsets();
    return (
        <View style={[{
            paddingTop: insets.top,
            backgroundColor: AppColors.background,
            flex: 1,
          }, style]}>
            {children}
        </View>
    );
}
export default SafeScreen;