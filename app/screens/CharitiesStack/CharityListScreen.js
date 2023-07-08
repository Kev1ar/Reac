import React from 'react';
import { StyleSheet,FlatList, View, Text} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import InstanceManager from '../../config/InstanceManager';
import SafeScreen from '../../components/SafeScreen';
import AppColors from '../../config/AppColors';
import CharityCell from '../../components/CharityCell';
import Header from '../../components/Header';

function CharityListScreen({navigation, route}) {

    const isFocused = useIsFocused();
    {isFocused ? 'focused' : 'unfocused'}
    return (
        <SafeScreen style={styles.container}>
             <Header
                title="My Charities"
                rightIcon="plus"
                onPressRight={() => navigation.navigate('AddScreen')}/>
            <View style={styles.listContainer}>
                <FlatList
                    columnWrapperStyle={{justifyContent: "flex-start"}}
                    data={InstanceManager.getInstance().userInfo.charityList}
                    // item represent a charity in charity list
                    renderItem={({item}) => 
                        <CharityCell source={item.image} 
                        onPress={() => navigation.navigate("Charity", {
                            screen: 'CharityList',
                            payload: item})}/>
                    }
                    keyExtractor={item => item.charityId}
                    numColumns={3}
                />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: AppColors.backgroundLight,
        height: '100%',
        paddingTop: 15,
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    tinyLogo: {
      width: 100,  
    },
    
})
export default CharityListScreen;