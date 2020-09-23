
// Saves newly added device to local store, and adds the device to the associated user
export const registerNewDevice = (payload) => {
    return {
        type: "REGISTER_NEW_DEVICE",
        payload: payload
    }
}

// Removes device from local store, and removes the device from the associated user
export const unpairDevice = (payload) => {
    return {
        type: "UNPAIR_DEVICE",
        payload: payload
    }
}


