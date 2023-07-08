import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

import SafeScreen from '../../components/SafeScreen';
import CategoryCell from '../../components/CategoryCell';
import AppColors from '../../config/AppColors';
import { LIST_OF_CATEGORIES } from '../../config/ConfigData';
import Header from '../../components/Header';


function CategoriesScreen({navigation, route}) {
    return (
        <SafeScreen>
            <Header
            title="Categories"/>
            <View style={styles.listContainer}>
                <FlatList
                        columnWrapperStyle={{alignSelf: 'flex-start', justifyContent: "flex-start",}}
                        data={LIST_OF_CATEGORIES}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        renderItem={({item}) => 
                            <CategoryCell 
                                onPress={() => (navigation.navigate("CategoryView", {message: item.value}))} 
                                title={item.value}
                                name={item.iconName} 
                                size={60}
                                color={AppColors.white}                            
                            />
                        }
                        numColumns={2}
                    />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,   
        paddingBottom: 50,
        backgroundColor: AppColors.backgroundLight,
    },
})
export default CategoriesScreen;