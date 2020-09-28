import { API, graphqlOperation } from 'aws-amplify';
import { createUser, deleteUser} from '../graphql/mutations';
import { listUsers} from '../graphql/queries';

// ===================================---FETCHING USERS---=======================================
// Fetch users from AWS, set loading flag
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_USERS_REQUEST" });
        API.graphql(graphqlOperation(listUsers)).then((response) => {
            const users = response.data.listUsers.items;
            dispatch(fetchUsersSuccess(users));
        }).catch((err) => {
            console.log("Error fetching users: ", err);
            dispatch(fetchUsersFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchUsersFailure = (error) => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched user data, remove loading flag
export const fetchUsersSuccess = (payload) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: payload
    }
}

// =====================================---ADDING NEW USER---=======================================

// add new user locally and upload to DynamoDB, sets loading flag
export const registerNewUser = (payload) => {
    return (dispatch) => {
        dispatch({ type: "ADD_NEW_USER_REQUEST", payload: payload });
        API.graphql(graphqlOperation(createUser, {input: payload})).then((response) => {
            dispatch(addNewUserSuccess());
        }).catch((err) => {
            console.log("Error registering new user: ", err);
            dispatch(registerNewUserFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const registerNewUserFailure = (error) => {
    return {
        type: "ADD_NEW_USER_FAILURE",
        payload: error
    }
}

// Removes loading flag
export const addNewUserSuccess = () => {
    return {
        type: "ADD_NEW_USER_SUCCESS",
    }
}


// =================================================================================================

// Updates user information
export const updateUserInformation = (payload) => {
    return {
        type: "UPDATE_USER_INFORMATION",
        payload: payload
    }
}
// =====================================---DELETING A USER---=======================================

// Delete user locally, and from DynamoDB. Also delete user profile image from S3 [future addition]
export const deleteUserRequest = (payload) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_USER", payload: payload});
        API.graphql(graphqlOperation(deleteUser, {input: {id: payload}})).then((response) => {
            dispatch(deleteUserSuccess());
        }).catch((err) => {
            console.log("Error deleting user: ", err);
            dispatch(deleteUserFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const deleteUserFailure = (error) => {
    return {
        type: "DELETE_USER_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: creates a successful deletion notification
export const deleteUserSuccess = () => {
    return {
        type: "DELETE_USER_SUCCESS",
    }
}

// =================================================================================================

