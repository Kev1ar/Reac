import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';

import {storeUser, getByEmail} from '../config/DataAccess';

import { DEFAULT_CHARITY_DATA, DEFAULT_PROFILE_PICTURE } from '../config/ConfigData';
import TextInputBlock from '../components/TextInputBlock';
import ButtonBlock from '../components/ButtonBlock';
import TextBlock from '../components/TextBlock';
import AppColors from '../config/AppColors';
import SafeScreen from '../components/SafeScreen';

// validation schema for register formik
const schema = Yup.object().shape(
    {
        firstname: Yup.string().required().label("First name"),
        lastname: Yup.string().required().label("Last name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(1).max(20).label("Password"),
        phonenumber: Yup.number().required().integer().label("Phone Number"),
    }
)

// page structure
function RegisterScreen({navigation}) {
    return ( 
        <SafeScreen style={styles.container}>
        <ScrollView 
            automaticallyAdjustKeyboardInsets={true}
            style={styles.scrollContainer}>
            <Image style={styles.logo} source={require('../assets/logo-green2.png')}/>
            <Formik
                validateOnChange={false}
                initialValues = {{firstname: '', lastname: '', email: '', password: '', phonenumber: ''}}
                onSubmit = { async (values, {resetForm}) => {
                    if(await getByEmail(values.email)){
                        alert(`An account already exists with this email.`);
                    }
                    else {
                        const newUserInfo = {
                            userId: uuid.v1(),
                            firstName: values.firstname,
                            lastName: values.lastname,
                            email: values.email,
                            password: values.password,
                            phoneNumber: values.phonenumber,
                            profilePicture: DEFAULT_PROFILE_PICTURE,
                            charityList: DEFAULT_CHARITY_DATA,
                        }
                        await storeUser(newUserInfo);
                        alert("Account Successfully Created.");
                        let data = await getByEmail(values.email);
                        console.log(JSON.stringify(data, null, 4));
                        resetForm();
                        navigation.navigate("Login");
                    }

                }}
                validationSchema={schema}
            >
                {({handleChange, handleSubmit, errors, values}) => (
                    <>
                        <TextInputBlock
                            placeholder="first name"
                            inputMode="none"
                            autoCapitalize="words"
                            value={values.firstname}
                            autoCorrect={false}
                            onChangeText = {handleChange("firstname")}/>
                        <TextBlock style={styles.errorMessage}>{errors.firstname}</TextBlock>
                        <TextInputBlock
                            placeholder="last name"
                            inputMode="none"
                            autoCapitalize="words"
                            value={values.lastname}
                            autoCorrect={false}
                            onChangeText = {handleChange("lastname")}/>
                        <TextBlock style={styles.errorMessage}>{errors.lastname}</TextBlock>
                        <TextInputBlock
                            placeholder="email-address"
                            inputMode="email"
                            autoCapitalize="none"
                            value={values.email}
                            autoCorrect={false}
                            onChangeText = {handleChange("email")}
                        />     
                        <TextBlock style={styles.errorMessage}>{errors.email}</TextBlock>
                        <TextInputBlock
                            placeholder="mobile number (+61)"
                            inputMode="tel"
                            autoCapitalize="none"
                            value={values.phonenumber}
                            autoCorrect={false}
                            onChangeText = {handleChange("phonenumber")}/>
                         <TextBlock style={styles.errorMessage}>{errors.phonenumber}</TextBlock>
                        <TextInputBlock
                            placeholder="password"
                            inputMode="none"
                            autoCapitalize="none"
                            value={values.password}
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText = {handleChange("password")}/>
                        <TextBlock style={styles.errorMessage}>
                                    * 8 characters minimum, must contain numbers, lowercase, & capital letters. 
                        </TextBlock>
                      
                        <ButtonBlock onPress={handleSubmit} style={styles.button}>Sign up</ButtonBlock>
                    </>
                )}
            </Formik>
        </ScrollView>
        </SafeScreen>
    );
}


// styling
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    scrollContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    errorMessage: {
        fontFamily: 'Lato',
        color: AppColors.errorLight,
        paddingLeft: 10,
        paddingBottom: 5,
    },
    button:{
        marginTop: 30,
        marginTop: 30,
        alignSelf: 'center',
    },
    logo: {
        width: 90,
        height: undefined,
        aspectRatio: 1,
        marginTop: 25,
        marginBottom: 25,
        alignSelf: 'center',
    },

})
export default RegisterScreen;