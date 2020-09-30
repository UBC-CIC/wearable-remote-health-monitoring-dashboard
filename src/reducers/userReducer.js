/*const initialUsers = [
    {id: "12345", firstName: "John", lastName: "Smith", age: 75, device: {id: "4etr32"},
        assignedGeofencing: [{id: "1234", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "12345", status: {code: 1, description: "DEVICE DISCONNECTED"},
        vitals: {id: "123", heartRate: 0}, facility: "Vancouver Care Center", room: "105e", phoneNumber: "888-888-8888", email: "example@example.com",
    emergencyContacts: [], careGivers: [],
        address: {id: "4et4", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, additionalNotes: ""},
    {id: "58943", firstName: "Jane", lastName: "Doe", age: 83, device: {id: "4etr35"},
        assignedGeofencing: [{id: "1236", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "58943", status: {code: 0, description: "NORMAL"},
        vitals: {id: "125", heartRate: 96}, facility: "Vancouver Care Center", room: "108b", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et5", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, additionalNotes: ""},
    {id: "10851", firstName: "Jessica", lastName: "Johnson", age: 91, device: {id: "5etr64"},
        assignedGeofencing: [{id: "1238", locationName: "outside facility", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "10851", status: {code: 4, description: "OUT OF BOUNDS"},
        vitals: {id: "126", heartRate: 85}, facility: "Vancouver Care Center", room: "103a", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et6", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, additionalNotes: ""},
    {id: "35836", firstName: "Philip", lastName: "Westinghouse", age: 78, device: {id: "6etr78"},
        assignedGeofencing: [{id: "1239", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "35836", status: {code: 3, description: "HEART RATE HIGH"},
        vitals: {id: "127", heartRate: 160}, facility: "Vancouver Care Center", room: "208a", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et7", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, additionalNotes: ""},
];*/

const initialUsers = [];


// delete user from local state
const deleteUserHelper = (users, payload) => {
    let newUsers = [...users];
    const index = newUsers.findIndex(user =>
        user.id === payload
    );

    if (index !== -1) {
        newUsers.splice(index, 1);
    }

    return newUsers;
}



// update user info in local state
const updateUserHelper = (users, profile) => {
    let newUsers = [];
    users.forEach((user) => {
        if (user.id === profile.id) {
            user = {...profile};
        }
        newUsers.push(user);
    });
    return newUsers;
}

// associate a device with a user
const deviceAssociationHelper = (users, payload) => {
    users.forEach(user => {
        if (user.id === payload.device.id) {
            user.device = payload.device;
        }
    })
    return users;
}

// remove paired device from targeted user
const removeDeviceHelper = (users, target) => {
    users.forEach(user => {
        if (user.id === target.userID) {
            user.device = null;
        }
    })

    return users;
}


const userReducer = (users = initialUsers, action) => {
    let newUsers = [...users];
    switch (action.type) {
        case "FETCH_USERS_SUCCESS": {
            return action.payload;
        }
        case "ADD_NEW_USER_REQUEST": {
            return newUsers.concat(action.payload);
        }
        case "UPDATE_USER_INFORMATION": {
            return updateUserHelper(newUsers, action.payload);
        }
        case "DELETE_USER": {
            return deleteUserHelper(newUsers, action.payload);
        }
        case "ASSOCIATE_NEW_DEVICE": {
            return deviceAssociationHelper(newUsers, action.payload);
        }
        case "DISASSOCIATE_DEVICE": {
            return removeDeviceHelper(newUsers, action.payload);
        }
        default:
            return newUsers;
    }
}



export default userReducer;