import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker';
import { SelectList } from 'react-native-dropdown-select-list'

import {LIST_OF_CATEGORIES} from '../../config/ConfigData';
import InstanceManager from '../../config/InstanceManager';

import SafeScreen from '../../components/SafeScreen';
import ButtonBlock from '../../components/ButtonBlock';
import TextInputBlock from '../../components/TextInputBlock';
import AppColors from '../../config/AppColors';
import ImageSelector from '../../components/ImageSelector';
import Header from '../../components/Header';


const schema = Yup.object().shape(
    {
        name: Yup.string().required(),
        description: Yup.string().required().max(200),
        category: Yup.string().required(),
        image: Yup.object().required(),
        
    }
)

function AddScreen({navigation}) {
    // Image picker API
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [1, 1],
          quality: 1,
          
        });
        if (!result.canceled) {
            return result.assets[0].uri;
          }
    }

    // Screen Structure
    return (
        <SafeScreen style={styles.container}>
            <Header
                title="Add Charity"
                rightIcon="plus"
                onPressRight={() => navigation.navigate('CharityList')}/>
            <View style={styles.mainContent}>
            <Formik
                validationSchema={schema}
                initialValues = {{name: '', description: '', category: '', image: {}}}
                onSubmit = { async (values, {resetForm}) => {  
                    
                    // create object to store new charity
                    newCharity= {
                            charityId: uuid.v1(),
                            name: values.name,
                            description: values.description,
                            categories: values.category,
                            image: values.image,
                            
                        };
                    
                    // add charity object to instance 
                    let instance = InstanceManager.getInstance();
                    instance.addCharity(newCharity);
                    resetForm();
                    navigation.navigate('CharityList');
                }}

            >
                {({handleChange, handleSubmit,setFieldValue, errors, values}) => (
                    <>  
                        <TextInputBlock
                            placeholder="charity name"
                            textContentType="none" // setting for iOS
                            inputMode="none"
                            autoCapitalize="words"
                            value={values.name}
                            autoCorrect={false}
                            onChangeText = {handleChange("name")}/>
                        <TextInputBlock
                            style={styles.description}
                            placeholder="description"
                            textContentType="none" // setting for iOS
                            inputMode="none"
                            multiline={true}
                            value={values.description}
                            autoCorrect={false}
                            onChangeText = {handleChange("description")}/>
                        <View style={styles.dropdownContainer}>
                            <SelectList 
                                setSelected={(val) => setFieldValue("category", val)} 
                                data={LIST_OF_CATEGORIES} 
                                save="value"
                                label="Categories"
                                boxStyles={styles.boxStyles}
                                inputStyles={styles.inputStyles}
                                dropdownStyles={styles.dropdown}
                                search={false} 
                                fontFamily={'Lato'}
                            />
                        </View>
                        
                        <ImageSelector style={styles.imagePicker} source={values.image} onPress={ async() => {
                            let link = await pickImage();
                            let linkObject = {uri: link}
                            setFieldValue('image', linkObject);
                        }}/>


                        <ButtonBlock onPress={handleSubmit} style={styles.addButton}>Add Charity</ButtonBlock>
                        <ButtonBlock onPress={() => navigation.navigate('CharityList')} style={styles.closeButton}>Cancel</ButtonBlock>
                        
                    </>
                )}
            </Formik>
            </View>
        </SafeScreen>
    );
}

// Styling
const styles = StyleSheet.create({
    mainContent: {
        marginLeft: '5%',
        marginRight: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
   
    description:{
       textAlignVertical: 'top',
       height: 100,
    },

    dropdownContainer:{
        paddingTop: 10,
        paddingBottom: 10,
        width:'100%',  
    },
    dropdown: {
        backgroundColor: AppColors.white,
    },
    boxStyles:{
        width:'100%',
        backgroundColor: AppColors.white,
    },

    imagePicker: {
        borderWidth: 3,
    },
    closeButton: {
        backgroundColor: AppColors.errorLight,
    },
    addButton:{
        width: '100%',
        marginTop: 30,
    },
    
})


export default AddScreen;