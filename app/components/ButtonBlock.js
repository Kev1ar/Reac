import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import AppColors from '../config/AppColors';

function ButtonBlock({children, onPress, style}) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <View >
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {   
        borderRadius: 30,
        padding: 10,
        width: '100%',
        marginTop: 3,
        marginBottom: 3,
        backgroundColor: AppColors.accentLight,
    },

    text:{
        fontSize: 18,
        textAlign: 'center',
        color: AppColors.white,
        fontFamily: 'Lato-Bold',
    },
})
export default ButtonBlock;