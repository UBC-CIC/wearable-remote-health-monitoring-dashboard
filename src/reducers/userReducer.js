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
        if (user.id === payload.user.id) {
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

const assignGeofenceHelper = (users, payload) => {
    let newUsers = [...users];
    newUsers.forEach(user => {
        if (user.device) {
            if (user.device.id === payload.id) {
                user.device.geofence = payload.geofence;
            }
        }
    })
    return newUsers;
}

const removeGeofenceHelper = (users, payload) => {
    let newUsers = [...users];
    newUsers.forEach(user => {
        if (user.device) {
            if (user.device.id === payload.id) {
                user.device.geofence = null;
            }
        }
    })
    return newUsers;
}

// sort users by firstName
const sortByFirstName = (users) => {

    users.sort((a, b) => {
        let nameA = a.firstName.toUpperCase();
        let nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
       if (nameA > nameB) {
           return 1;
       }

       return 0;
    })

    return users;
}


const userReducer = (users = initialUsers, action) => {
    let newUsers = [...users];
    switch (action.type) {
        case "FETCH_USERS_SUCCESS": {
            return sortByFirstName(action.payload);
        }
        case "ADD_NEW_USER_REQUEST": {
            return sortByFirstName(newUsers.concat(action.payload));
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
        case "ASSIGN_LOCATION": {
            return assignGeofenceHelper(newUsers, action.payload);
        }
        case "REMOVE_LOCATION": {
            return removeGeofenceHelper(newUsers, action.payload);
        }
        default:
            return newUsers;
    }
}



export default userReducer;