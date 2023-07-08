import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import InstanceManager from '../config/InstanceManager';
import {clearAll, getByEmail, getByEmailPassword} from '../config/DataAccess';

import SafeScreen from '../components/SafeScreen';
import TextInputBlock from '../components/TextInputBlock';
import ButtonBlock from '../components/ButtonBlock';
import LinkBlock from '../components/LinkBlock';
import TextBlock from '../components/TextBlock';
import AppColors from '../config/AppColors';



const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).max(20).label("Password"),
    }
)


const validateUser = async ({email, password}) => {
    if(await getByEmailPassword(email, password))
        return true;
    return false;
}

// creates a user instance using the provided valid email
const createInstance = async (email) => {
    const instance = InstanceManager.getInstance();
    let newUserInfo = await getByEmail(email);
    instance.setUserInfo(newUserInfo);
    console.log("CURRENT INSTANCE DATA:")
    console.log(instance.getUserInfo());
}

function LoginScreen({navigation}) {
    return (
        <SafeScreen>
        <View style={styles.container}>
            <Image style={styles.logo}source={require('../assets/logo-green2.png')}/>
            <Text style={styles.title}>Log in</Text>
            
            <Formik
                initialValues=  {{ email:'', password: '', }}
                onSubmit = { async (values, {resetForm}) => {
                    if(await validateUser(values)){ 
                        await createInstance(values.email);
                        resetForm();
                        navigation.navigate("Main App");
                    }
                    else {
                        resetForm();
                        alert("Invalid Login Details, Please Try Again");
                    }
                }}
                validationSchema={schema}
            >
                {({handleChange, handleSubmit, errors, values,}) => (
                    <>
                        <TextInputBlock
                            placeholder="email-address"
                            inputMode="email"
                            value={values.email}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText = {handleChange("email")}
                        />
                        <TextBlock style={styles.errorMessage}>{errors.email}</TextBlock>
                        <TextInputBlock
                            placeholder="password"
                            textContentType="none" // setting for iOS
                            inputMode="none"
                            autoCapitalize="none"
                            value={values.password}
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText = {handleChange("password")}
                        />
                        <TextBlock style={styles.errorMessage}>{errors.password}</TextBlock>
                        <ButtonBlock style={styles.logIn} onPress={handleSubmit}>Log in</ButtonBlock>
                    </>
                )}
            </Formik>
            <View style={styles.dividerContainer}>
                <View style={styles.divider}/>
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.divider}/>
            </View>
            <ButtonBlock style={styles.signUp} onPress={() => navigation.navigate("Register")}>Sign up</ButtonBlock>
            <LinkBlock>Learn about us</LinkBlock>
            {/* <ButtonBlock onPress={() => clearAll()}>CLEAR DATABASE</ButtonBlock> */}
        </View>
        </SafeScreen>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    logo: {
        width: 110,
        height: undefined,
        aspectRatio: 1,
        marginBottom: 50,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        alignSelf: 'baseline',
        color: AppColors.white,
    },

    errorMessage: {
        color: AppColors.errorLight,
        textAlign: 'left',
        alignSelf: 'baseline',
        paddingLeft: 5,
    },

    dividerContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    divider: {
        height: 2,
        margin: 5,
        width: '45%',
        backgroundColor: AppColors.accent,
    },
    dividerText:{
        fontFamily: 'Lato-Bold',
        color: AppColors.white,
    },
    logIn: {
        
    },
    signUp: {
        backgroundColor: 'grey',
        
    },
})

export default LoginScreen;