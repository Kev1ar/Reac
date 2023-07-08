import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import SafeScreen from '../../components/SafeScreen';
import InstanceManager from '../../config/InstanceManager';
import AppColors from '../../config/AppColors';
import ButtonBlock from '../../components/ButtonBlock';
import IconButton from '../../components/IconButton';
import Header from '../../components/Header';

function HomeScreen({navigation}) {
    const isFocused = useIsFocused();
    {isFocused ? 'focused' : 'unfocused'}
    return (
        <SafeScreen style={styles.container}>
            <View style={styles.header}/>
            
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={InstanceManager.getInstance().userInfo.profilePicture}/>
            </View>
            <Text style={styles.title}>{InstanceManager.getInstance().userInfo.firstName} {InstanceManager.getInstance().userInfo.lastName}</Text>
            <Text style={styles.profileText}>(+61) 0421 456 309</Text>
            <Text style={styles.profileText}>{InstanceManager.getInstance().userInfo.email}</Text>
            <Text style={styles.profileText}>Australia</Text>
            

            <View style={styles.banner}>
                <Text style={[styles.bannerText, {flex: 5, padding: 15, textAlign: 'center'}]}>
                    Charities Added</Text>
                <Text style={[styles.bannerText,
                    {flex: 1, padding: 15, backgroundColor: AppColors.backgroundLight, textAlign: 'center'}]}>
                    {InstanceManager.getInstance().userInfo.charityList.length}</Text>
            </View>
            <View style={styles.banner}>
                <Text style={[styles.bannerText, {flex: 5, padding: 15, textAlign: 'center'}]}>
                    Quote of the Day</Text>
                <Text style={[styles.bannerText,
                    {flex: 1, padding: 15, backgroundColor: AppColors.backgroundLight, textAlign: 'center'}]}>
                    {InstanceManager.getInstance().userInfo.charityList.length}</Text>
            </View>

            <ButtonBlock 
                style={styles.edit} 
                onPress={ () => { navigation.navigate("EditScreen");}}
            >Edit</ButtonBlock>
            <ButtonBlock 
                style={styles.logout} 
                onPress={ () => {
                    navigation.navigate("Login");
                    InstanceManager.deleteInstance();}}
            >Log Out</ButtonBlock>
            
          
           
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
   
    header: {
        height: '25%',
        width: '100%',
        backgroundColor: AppColors.backgroundLight,
        position: 'absolute',
    },
    avatarContainer: {
        overflow: 'hidden',
        borderRadius: 1000,
        borderWidth: 10,
        borderColor: AppColors.background,
    },
    avatar: {
        height: 175,
        width: 175,
    },
    profileText: {
        fontFamily: 'Lato',
        color: AppColors.white,
        padding: 2,
    },
  
    banner:{
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: AppColors.hybrid,
        borderRadius: 15,
        overflow: 'hidden',
    },

    bannerText: {
        fontFamily: 'Lato-Bold',
        color: AppColors.white,
        fontSize: 20,
    },
    title: {
        paddingBottom: 5,
        fontFamily: 'Lato-Bold',
        color: AppColors.white,
        fontSize: 30,
    },
    edit: {
        width: 150,
        marginTop: 50,
    },
    logout: {
        backgroundColor: AppColors.errorLight,
        width: 150,
        padding: 10,
    },


    
})

export default HomeScreen;