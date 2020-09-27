import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createUser} from '../graphql/mutations';
import { listUsers} from '../graphql/queries';

// =============================---FETCHING USERS---=============================================
// Fetch users from AWS, set loading flag
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_USERS_REQUEST" });
        API.graphql(graphqlOperation(listUsers)).then((response) => {
            console.log("userData: ", response);
            const users = response.data.listUsers.items;
            console.log("users fetched: ", users);
            dispatch(fetchUsersSuccess(users));
        }).catch((err) => {
            console.log("Error fetching users: ", err);
            dispatch(fetchUsersFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchUsersFailure = (payload) => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: payload
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


// Saves newly registered user to local store
export const registerNewUser = (payload) => {
    return {
        type: "REGISTER_NEW_USER",
        payload: payload
    }
}

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
