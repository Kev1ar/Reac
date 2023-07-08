import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from "react-native";

import AppColors from '../config/AppColors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

function CharityBanner({name, source, onPress,}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={source}
                    resizeMode='cover'/>
                <Text style={styles.text}>{name}</Text>
                
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 2,
        backgroundColor: AppColors.backgroundLight,
        borderRadius: 5,
        marginBottom: 20,
    },
    image:{
        width: '100%',
        height: 300,
        maxHeight: 450,
    },

    text: {
        fontFamily: 'Lato-Bold',
        color: AppColors.white,
        fontSize: 25,
        padding: 10,

    },

})
export default CharityBanner;