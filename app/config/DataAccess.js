
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores a new user's information into the database in string format.
 * Sets the userInfo as the value & the user id as the database key.
 * ! Modifies existing entry if key already exists. !
 * @param {Object} userInfo user information in json format
 */
export const storeUser = async (userInfo) => {
    try {
        const jsonValue = JSON.stringify(userInfo);
        await AsyncStorage.setItem(userInfo.userId, jsonValue);
      } catch (e) {
      }
      console.log("VALUE STORED");
  };

/**
 * Merges a new object into the database.
 */
export const mergeUser = async (userId, mergeObject) => {
  try {
      await AsyncStorage.mergeItem(userId, JSON.stringify(mergeObject))
    } catch (e) {
      
    }
    console.log("VALUE MERGED");
};

/**
 * Removes item for a key (user id)
 * If user key not found, returns null.
 * @param {String} userid key for database
 */
export const removeValue = async (userid) => {
    try {
        await AsyncStorage.removeItem(userid);
    } catch(e) {
        console.log(e);
    }
    console.log("DELETION SUCCESSFUL");
}
      
/**
 * Get key value from database given key (userID).
 * Parse string into JSON format and return,
 * returns null is key does not exist or value at key is null.
 * @param {Integer} userID unique user identifier key 
 */
export const getData = async (userID) => {
    try {
        const jsonValue = await AsyncStorage.getItem(userID);
        return (jsonValue != null) ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
}

export const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch(e) {
    }
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }

/**
 * Searches all keys in the database for same email + passwordfield, 
 * returns key value (userInfo) that has same values
 * Returns null if email + password combination does not exist in database.
 * @param {String} email user email
 */
  export const getByEmailPassword = async (email, password) => {
    const keys = await getAllKeys();
    for (const key of keys) {
      let userData = await getData(key);
      if(userData.email === email && userData.password == password){
        return userData;
      }
    }
    console.log("EMAIL NOT FOUND")
    return null;
  }
    
 /**
 * Searches all keys in the database for same email field, 
 * returns key value (userInfo) that has same email.
 * Returns null if email does not exist in database.
 * @param {String} email user email
 */
  export const getByEmail = async (email) => {
    const keys = await getAllKeys();
    for (const key of keys) {
      let userData = await getData(key);
      if(userData.email === email){
        return userData;
      }
    }
    console.log("EMAIL NOT FOUND")
    return null;
  }

 export const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch(e) {
    }
    console.log('Database Emptied')
  }
    

