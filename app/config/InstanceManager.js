import * as DataAccess from './DataAccess';

export default class InstanceManager {
    static currentInstance = null;
    userInfo = "";

    // Returns current user instance, creates one if instance does not currently exist
    static getInstance() {
        if(!InstanceManager.currentInstance) {
            InstanceManager.currentInstance = new InstanceManager();
        }
        return this.currentInstance;
    }

    // Deletes user instance
    static deleteInstance() {
            this.currentInstance = null;
    }

    // Updates and replaces user information of current user instance
    setUserInfo(newUserInfo) {
        return this.userInfo = newUserInfo;
    }

    // Returns user information of current user instance
    getUserInfo() {
        return this.userInfo;
    }

    // Removes charity from charity list, updates database
    async removeCharity(charityId) {
        for(let i = 0; i < this.userInfo.charityList.length; i++){
            if(this.userInfo.charityList[i].charityId == charityId){
                this.userInfo.charityList.splice(i, 1);
                break;
            }
        }
        await DataAccess.storeUser(this.userInfo);
    }

    async updateUserInfo(){
        await DataAccess.storeUser(this.userInfo);
    }

    // Adds charity to charity list, updates database
    async addCharity(newCharity) {
        this.userInfo.charityList.push(newCharity);
        await DataAccess.storeUser(this.userInfo);
    }

}


