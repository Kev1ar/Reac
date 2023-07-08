import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import AppColors from '../config/AppColors';
import {MaterialCommunityIcons} from '@expo/vector-icons'



function ImageSelector({onPress, style, source}) {
    return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Image 
            style={styles.image}
            source={source}/>
        <MaterialCommunityIcons
                style={styles.icon}
                name={'plus'}
                size={35}
                color={AppColors.black}/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
    },
    button: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: 175,
        height: 175,
        backgroundColor: AppColors.backgroundLight,
    },
    icon: {
        borderRadius: 1000,
        opacity: 0.8,
        backgroundColor: AppColors.white,
        position: 'absolute',
    },

})
export default ImageSelector;