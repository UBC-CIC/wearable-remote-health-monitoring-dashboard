
// Saves newly added device to local store
export const addNewDevice = (payload) => {
    return {
        type: "ADD_NEW_DEVICE",
        payload: payload
    }
}