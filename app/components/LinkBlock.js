import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import AppColors from '../config/AppColors';

function LinkBlock({children, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5,
    },

    text:{
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: AppColors.white,
        fontFamily: 'Lato-Bold',
    },
})
export default LinkBlock;