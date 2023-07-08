export const DEFAULT_CHARITY_DATA = [
    {
        charityId: '1',
        name: 'Australian Red Cross',
        description: `The International Red Cross and Red Crescent Movement is a global humanitarian network of 80 million people that helps those facing disaster, conflict and health and social problems.`,
        image: require('../assets/red-cross.jpg'),
        categories: 'health',
    },
    {
        charityId: '2',
        name: 'The Smith Family',
        description: `At The Smith Family, we believe that education is one of the worlds most powerful change agents. That’s why we focus on helping young Australians to overcome educational inequality caused by poverty. As a national, independent charity, every day we work with thousands of children and their families to help them unlock better futures for themselves`,
        image: require('../assets/smith-family.jpg'),
        categories: 'education',
    },
]

export const LIST_OF_CATEGORIES = [
    {   key:'1', iconName: 'bottle-tonic-plus', value: 'health'},
    {   key:'2', iconName: 'school', value: 'education'},
    {   key:'3', iconName: 'account-group', value: 'social'},
    {   key:'4', iconName: 'cross-celtic', value: 'religion'},
    {   key:'5', iconName: 'human', value: 'human rights'},
    {   key:'6', iconName: 'tree', value: 'environment'},
    {   key:'7', iconName: 'dog', value: 'animals'},
    {   key:'8', iconName: 'help', value: 'other'}
]

export const DEFAULT_PROFILE_PICTURE = require('../assets/avatar.png')

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





    

    
