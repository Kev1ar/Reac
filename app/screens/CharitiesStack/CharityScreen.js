import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import InstanceManager from '../../config/InstanceManager';

import SafeScreen from '../../components/SafeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from '../../config/AppColors';
import ButtonBlock from '../../components/ButtonBlock';
import Header from '../../components/Header';
import { LIST_OF_CATEGORIES } from '../../config/ConfigData';

const getCategoryIcon = (categoryName) => {
    
    for(let item of LIST_OF_CATEGORIES){
        if(item.value === categoryName){
            return item.iconName;
        }   
    }
}

function CharityScreen({navigation, route}) {
    console.log(route.params.payload.name);
    return (
        <SafeScreen style={styles.container}>
                <Header
                title={route.params.payload.name}
                leftIcon="chevron-left"
                onPressLeft={() => navigation.goBack() }/>

            <ScrollView style={styles.body}>
                <Text style={styles.subtitle}>Categories</Text>

                <View style={styles.categoryWrapper}>
                    <MaterialCommunityIcons
                        style={styles.categoryIcon}
                        name={getCategoryIcon(route.params.payload.categories)}
                        size={30}
                        color={AppColors.backgroundLight}/>
                    <Text style={styles.categoryText}>{route.params.payload.categories}</Text>
                </View>
                



                <Text style={styles.subtitle}>Description</Text>
                <Text style={styles.description}>{route.params.payload.description}</Text>
                <Image source={route.params.payload.image} style={styles.image}/>



                <ButtonBlock 
                style={styles.delete} 
                onPress={ async () => {
                    let instance = InstanceManager.getInstance();
                    await instance.removeCharity(route.params.payload.charityId);
                    navigation.goBack() ;
                 }}>
                Delete
                </ButtonBlock>
            </ScrollView>
            
        </SafeScreen>
    );
}
const styles = StyleSheet.create({
    container:{
    },
    header:{
        flexDirection: 'row',

    },


    categoryWrapper:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.accentLight,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 10,
    },
    categoryText:{
        color: AppColors.backgroundLight,
        paddingLeft: 5,
        fontFamily: 'Lato-Bold',
    },

    body: {
        height: '100%',
        backgroundColor: AppColors.backgroundLight,
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    subtitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        textDecorationLine: 'underline',
        color: AppColors.white,
        marginTop: 15,
        paddingBottom: 10,
    },
    description:{
        fontFamily: 'Lato',
        fontSize: 16,
        color: AppColors.white,
        paddingBottom: 10,
    },
    image: {
        height: 250,
        aspectRatio: 1,
        alignSelf: 'center',
    },
    delete: {
        marginTop: 25,
        backgroundColor: AppColors.errorLight,
        alignSelf: 'center',
        
        marginBottom: 50,
    },
    
})
export default CharityScreen;