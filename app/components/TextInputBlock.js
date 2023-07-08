import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import AppColors from '../config/AppColors';


function TextInputBlock({style, ...otherProps}) {
    return (
        <View style={[styles.container, style]}>
            <TextInput style={styles.input} 
             {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.white,
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 15,
        marginTop: 5,
        borderRadius: 15,
    },
    input: {
        width: '100%',
        fontFamily: 'Lato',
        fontSize: 16,
    },
})
export default TextInputBlock;