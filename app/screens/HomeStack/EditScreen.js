import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import InstanceManager from '../../config/InstanceManager';

import SafeScreen from '../../components/SafeScreen';
import ButtonBlock from '../../components/ButtonBlock';
import TextInputBlock from '../../components/TextInputBlock';
import AppColors from '../../config/AppColors';
import ImageSelector from '../../components/ImageSelector';
import TextBlock from '../../components/TextBlock';
import Header from '../../components/Header';

const schema = Yup.object().shape(
    {
        firstname: Yup.string().required().label("First name"),
        lastname: Yup.string().required().label("Last name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(1).max(20).label("Password"),
        phonenumber: Yup.number().required().integer().label("Phone Number"),
    }
);

function EditScreen({navigation}) {
    const instance = InstanceManager.getInstance();
    const userInfo = instance.getUserInfo();
    // Image picker API
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
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
                title="Change Account Details"
                onPressRight={() => navigation.navigate("HomeScreen")}
                rightIcon='close'/>
            <ScrollView  style={styles.scrollContainer}
                        contentContainerStyle={{ paddingTop:20, paddingBottom: 50, }}>
            <Formik
                automaticallyAdjustKeyboardInsets={true}
                validationSchema={schema}
                initialValues = {{  firstname: userInfo.firstName, 
                                    lastname: userInfo.lastName,
                                    email: userInfo.email, 
                                    password: userInfo.password, 
                                    phonenumber: userInfo.phoneNumber , 
                                    profilepicture: userInfo.profilePicture,
                                }}
                onSubmit = { async (values, {resetForm}) => {  
                    
                    // add charity object to instance 
                    userInfo.firstName = values.firstname,
                    userInfo.lastName = values.lastname,
                    userInfo.email = values.email,
                    userInfo.password = values.password,
                    userInfo.phoneNumber = values.phonenumber,
                    userInfo.profilePicture = values.profilepicture,
                    await instance.updateUserInfo();
                    resetForm();
                    navigation.navigate('HomeScreen');
                }}

            >
                {({handleChange, handleSubmit, setFieldValue, errors, values}) => (
                    <>  
                        <ImageSelector style={styles.imageSelector} source={values.profilepicture} onPress={ async() => {
                                let link = await pickImage();
                                let linkObject = {uri: link}
                                setFieldValue('profilepicture', linkObject);
                            }}/>
                        <TextBlock style={styles.fieldLabel}>First name</TextBlock>
                       <TextInputBlock
                            inputMode="none"
                            autoCapitalize="words"
                            value={values.firstname}
                            autoCorrect={false}
                            onChangeText = {handleChange("firstname")}/>
                        <TextBlock style={styles.errorMessage}>{errors.firstname}</TextBlock>
                        <TextBlock style={styles.fieldLabel}>Last name</TextBlock>
                        <TextInputBlock
                            placeholder="last name"
                            inputMode="none"
                            autoCapitalize="words"
                            value={values.lastname}
                            autoCorrect={false}
                            onChangeText = {handleChange("lastname")}/>
                        <TextBlock style={styles.errorMessage}>{errors.lastname}</TextBlock>
                        <TextBlock style={styles.fieldLabel}>Email</TextBlock>
                        <TextInputBlock
                            placeholder="email-address"
                            inputMode="email"
                            autoCapitalize="none"
                            value={values.email}
                            autoCorrect={false}
                            onChangeText = {handleChange("email")}
                        />     
                        <TextBlock style={styles.errorMessage}>{errors.email}</TextBlock>
                        <TextBlock style={styles.fieldLabel}>Mobile Number</TextBlock>
                        <TextInputBlock
                            placeholder="mobile number (+61)"
                            inputMode="tel"
                            autoCapitalize="none"
                            value={values.phonenumber}
                            autoCorrect={false}
                            onChangeText = {handleChange("phonenumber")}/>
                        <TextBlock style={styles.errorMessage}>{errors.phonenumber}</TextBlock>
                        <TextBlock style={styles.fieldLabel}>Password</TextBlock>
                        <TextInputBlock
                            placeholder="password"
                            inputMode="none"
                            autoCapitalize="none"
                            value={values.password}
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText = {handleChange("password")}/>
                        <TextBlock style={styles.errorMessage}>
                                    * 8 characters minimum, must contain numbers, lowercase, & capital letters. 
                        </TextBlock>
                        
                        
                        <View style={styles.buttonContainer}>
                            <ButtonBlock onPress={handleSubmit} style={styles.addButton}>Save</ButtonBlock>
                            <ButtonBlock onPress={() => 
                                    navigation.navigate('HomeScreen')} 
                                    style={styles.closeButton}>Cancel</ButtonBlock>
                        </View>
                    </>
                )}
            </Formik>
            </ScrollView>
        </SafeScreen>
    );
}

// Styling
const styles = StyleSheet.create({
    scrollContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    imageSelector:{
        alignSelf: 'center',
        borderRadius: 1000,
    },
    fieldLabel:{
        color: AppColors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 15,
        paddingLeft: 5,
    },
    errorMessage:{
        color: AppColors.errorLight,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    closeButton:{
        backgroundColor: AppColors.errorLight,
    },
    
})


export default EditScreen;