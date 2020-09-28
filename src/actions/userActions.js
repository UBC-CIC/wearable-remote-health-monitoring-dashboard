import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createUser} from '../graphql/mutations';
import { listUsers} from '../graphql/queries';

// =============================---FETCHING USERS---=============================================
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
// =================================================================================================

// ===============================---ADDING NEW USER---=============================================

// add new user locally and upload to DynamoDB, sets loading flag
export const registerNewUser = (payload) => {
    return (dispatch) => {
        dispatch({ type: "ADD_NEW_USER_REQUEST", payload: payload });
        API.graphql(graphqlOperation(createUser, {input: payload})).then((response) => {
            console.log("response", response);
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
        type: "ADD_NEW_USER_REQUEST",
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

// Delete user
export const deleteUser = (payload) => {
    return {
        type: "DELETE_USER",
        payload: payload
    }
}

/*
// Fetch user profile based on given user ID
export const fetchUserProfile = (payload) => {
    return {
        type: "FETCH_USER_PROFILE",
        payload: payload
    }
}*/
