import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Dimensions } from "react-native";

import AppColors from '../config/AppColors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

function CategoryCell({name, size, color, title, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons
                name={name}
                size={size}
                color={color}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: width/2.2,
        height: undefined,
        aspectRatio: 1,
        margin: 2,
        backgroundColor: AppColors.accentLight,
        borderRadius: 20,
        elevation: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingTop: 10,
        fontFamily: 'Lato-Bold',
        color: AppColors.white,
        fontSize: 20,

    },

})
export default CategoryCell;