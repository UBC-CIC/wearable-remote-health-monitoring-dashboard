



export const getUsers = () => {
    return {
        type: "GET_USERS",
    }
}

// Saves newly registered user to local store
export const registerNewUser = (payload) => {
    return {
        type: "REGISTER_NEW_USER",
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
