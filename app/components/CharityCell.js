import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Dimensions } from "react-native";

import AppColors from '../config/AppColors';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

function CharityCell({source, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View  style={[styles.container, style]}>
                <Image style={styles.image} source={source}/>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: width/3.4,
        height: undefined,
        aspectRatio: 1,
        margin: 2,
        borderColor: AppColors.background,
        borderWidth: 1,
    },
    image:{
        flex:1,
        height: undefined,
        width: undefined,
    },

})
export default CharityCell;