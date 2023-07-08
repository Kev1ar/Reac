# Reach Charity Applications

This project is built using React Native and Expo as a mini-project that started from a university assignment. I expanded upon the inital assignment specifications after being unsatisfied with my final submission product. 

## Primary Test Devices
Both devices used are on the smaller side.
	-	Android Pixel 4 API 29
	-	iPhone 11
 
## Colors
Palette was generated from here:	
https://coolors.co/394053-4e4a59-6e6362-839073-7cae7a
Open AppColours.js under [Reach/app/config/AppColours.js] to view the specific color configurations.

## Dependencies List
	+-- @babel/core@7.21.8
	+-- @react-native-async-storage/async-storage@1.17.11
	+-- @react-navigation/bottom-tabs@6.5.7
	+-- @react-navigation/native@6.1.6
	+-- @react-navigation/native-stack@6.9.12
	+-- expo@48.0.17
	+-- expo-status-bar@1.4.4
	+-- formik@2.2.9
	+-- react@18.2.0
	+-- react-native@0.71.8
	+-- react-native-dropdown-select-list@2.0.4
	+-- react-native-safe-area-context@4.5.0
	+-- react-native-screens@3.20.0
	+-- react-native-uuid@2.0.1
	`-- yup@1.1.1

## User Data Structure
The project uses react native async-storage to store user data locally. The example object below defines the intended structure user data is stored and used in the application. Detailed configuration found in [Reach/app/config/ConfigData.js].

### Example User Case
	const EXAMPLE_USER_INFO = {
		userId: '1',
		email: 'email@gmail.com',
		password: '123456',
		firstName: 'Jogh',
		lastName: 'Chest',
		phoneNumber: '1234567890',
		country: 'Australia',
		profilePicture: '',
		charityList: [
		], 
	}

# todo

screenshots, video, how-to open
