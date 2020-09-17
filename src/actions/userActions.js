



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