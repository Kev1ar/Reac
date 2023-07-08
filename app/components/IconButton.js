import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

function IconButton({onPress, name, size, color, style}) {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <MaterialCommunityIcons
                style={[styles.icon]}
                name={name}
                size={size}
                color={color}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
}) 
export default IconButton;