import React from 'react';
import { View ,Text, FlatList, StyleSheet} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import InstanceManager from '../../config/InstanceManager';

import SafeScreen from '../../components/SafeScreen';
import AppColors from '../../config/AppColors';
import IconButton from '../../components/IconButton';
import CharityBanner from '../../components/CharityBanner';
import Header from '../../components/Header';


function CategoryViewScreen({navigation, route}) {
    const isFocused = useIsFocused();
    {isFocused ? 'focused' : 'unfocused'}

    // takes category from route payload and creates list of charities from category
    const category = route.params.message;
    
    const getCategoryList = (category) => {
            const charityList = InstanceManager.getInstance().userInfo.charityList;
            const matchingCharities = [];
            for(let i = 0; i < charityList.length; i++){
                if(charityList[i].categories === category)
                    matchingCharities.push(charityList[i]);
            }
            return matchingCharities;
        }
    const charitiesInCategory = getCategoryList(category);
    console.log(charitiesInCategory);
    // return statement when category is empty
    if(charitiesInCategory.length === 0){
        return (
        <SafeScreen style={styles.container}>
            <View style={styles.header}>
                <IconButton   
                    onPress={() => navigation.navigate("Category")}          
                    name="chevron-left"
                    size={40}
                    color={AppColors.white}/>
                <Text style={styles.title}>Charity Catagory: {category}</Text>
            </View>
            <View style={styles.emptyBody}>
                <Text style={styles.emptyMessage}>It's empty here...</Text>
            </View>
            
        </SafeScreen>
        );
    }
    
    // standard return DOM
    return (
        <SafeScreen style={styles.container}>
             <Header
                title={category}
                leftIcon='chevron-left'
                onPressLeft={() => navigation.navigate("Category")}/>
            <View style={styles.listContainer}>
                <FlatList
                    data={charitiesInCategory}
                    renderItem={({item}) => 
                        <CharityBanner 
                            onPress={() => navigation.navigate("Charity", { 
                                    screen: 'CategoryView',
                                    payload: item}
                                )} 
                            name={item.name}
                            source={item.image}                        
                        />}
                    numColumns={1}/>
            </View>
        </SafeScreen>
    );
}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        height: 45,
    },
    title:{
        paddingLeft: '3%',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: AppColors.white,
    },
    listContainer:{
        width: '100%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: 45,
    },

    emptyBody:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    emptyMessage: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: AppColors.accentLight,
        padding: 5,
        
    }
})

export default CategoryViewScreen;