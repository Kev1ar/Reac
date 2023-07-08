import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import AppColors from '../config/AppColors';
import IconButton from './IconButton';

function Header({title, onPressRight, onPressLeft, rightIcon="", leftIcon=""}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.headerLeft}>
            <IconButton   
                        style={styles.icon}
                        onPress={onPressLeft}          
                        name={leftIcon}
                        size={40}
                        color={AppColors.white}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.pageTitle}>{title}</Text>
            </View>
            <View style={styles.headerRight}>
            <IconButton   
                        style={styles.icon}
                        onPress={onPressRight}          
                        name={rightIcon}
                        size={35}
                        color={AppColors.white}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        height: 50,
        width: '100%',
        backgroundColor: AppColors.background,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: AppColors.black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 2,
        elevation: 1,
    },
    pageTitle: {
        color: AppColors.white,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        textTransform: 'capitalize',
    },
    headerLeft:{
        width: 40,
        marginLeft: 5,
        marginRight: 'auto',
    },
    headerRight:{
        width: 40,
        marginRight: 5,
        marginLeft: 'auto',
    },
});
        
export default Header;