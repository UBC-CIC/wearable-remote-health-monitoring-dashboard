import { API, graphqlOperation } from 'aws-amplify';
import { listDevices } from '../graphql/queries';
import {createDevice, updateDevice, updateUser, deleteDevice } from '../graphql/mutations';




// ===================================---FETCHING DEVICES---=======================================
// Fetch devices from DynamoDB, set loading flag
export const fetchDevices = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_DEVICES_REQUEST" });
        API.graphql(graphqlOperation(listDevices)).then((response) => {
            const devices = response.data.listDevices.items;
            dispatch(fetchDevicesSuccess(devices));
        }).catch((err) => {
            console.log("Error fetching devices: ", err);
            dispatch(fetchDevicesFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchDevicesFailure = (error) => {
    return {
        type: "FETCH_DEVICES_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched device data
export const fetchDevicesSuccess = (payload) => {
    return {
        type: "FETCH_DEVICES_SUCCESS",
        payload: payload
    }
}

// ===================================---REGISTERING A DEVICE---=======================================

// Saves newly added device to local store and DynamoDB
export const registerNewDevice = (payload) => {
    return (dispatch) => {
        // Add device locally
        dispatch({ type: "REGISTER_NEW_DEVICE", payload: payload});
        // Add device to DynamoDB
        API.graphql(graphqlOperation(createDevice, {input: {id: payload.id,
                deviceStatus: payload.deviceStatus}})).then((response) => {
                    console.log(response);
            dispatch(registerDeviceSuccess());
        }).catch((err) => {
            console.log("Error registering device: ", err);
            dispatch(registerDeviceFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const registerDeviceFailure = (error) => {
    return {
        type: "REGISTER_DEVICE_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const registerDeviceSuccess = () => {
    return {
        type: "REGISTER_DEVICE_SUCCESS",
    }
}

// ===================================---ASSOCIATE A DEVICE WITH A USER---=======================================


// Associates a device with a User
export const associateDeviceWithUser = (payload) => {
    return (dispatch) => {
        // Associate device locally
        dispatch({ type: "ASSOCIATE_NEW_DEVICE", payload: payload});
        API.graphql(graphqlOperation(updateDevice, {input: {id: payload.device.id,
                userID: payload.user.id}})).then((response) => {
            dispatch(associateDeviceSuccess(payload));
        }).catch((err) => {
            console.log("Error pairing user to device: ", err);
            dispatch(associateDeviceFailure(err));
        })
    }
}


// NOT YET IMPLEMENTED: respond to failure condition
export const associateDeviceFailure = (error) => {
    return {
        type: "ASSOCIATE_DEVICE_FAILURE",
        payload: error
    }
}

// Now associated the device to the user in DynamoDB
export const associateDeviceSuccess = (payload) => {
    return (dispatch) => {
        API.graphql(graphqlOperation(updateUser, {input: {id: payload.user.id,
                userDeviceId: payload.device.id}})).then((response) => {
        }).catch((err) => {
            console.log("Error pairing device to user: ", err);
            dispatch(associateDeviceFailure(err));
        })
    }
}

// ===================================---DISASSOCIATE A DEVICE FROM A USER---=======================================

// Disassociates a User from a Device
export const disassociateDeviceWithUser = (payload) => {
    return (dispatch) => {
        // Disassociate device locally
        dispatch({ type: "DISASSOCIATE_DEVICE", payload: payload});
        API.graphql(graphqlOperation(updateDevice, {input: {id: payload.deviceID,
                userID: null}})).then((response) => {
            dispatch(disassociateDeviceSuccess(payload));
        }).catch((err) => {
            console.log("Error pairing user to device: ", err);
            dispatch(disassociateDeviceFailure(err));
        })
    }
}


// NOT YET IMPLEMENTED: respond to failure condition
export const disassociateDeviceFailure = (error) => {
    return {
        type: "DISASSOCIATE_DEVICE_FAILURE",
        payload: error
    }
}

// Disassociates a Device from a User in DynamoDB
export const disassociateDeviceSuccess = (payload) => {
    return (dispatch) => {
        API.graphql(graphqlOperation(updateUser, {input: {id: payload.userID,
                userDeviceId: null}})).then((response) => {
        }).catch((err) => {
            console.log("Error pairing device to user: ", err);
            dispatch(disassociateDeviceFailure(err));
        })
    }
}

// ===================================---DELETE A DEVICE---=======================================

// Delete a device
export const deleteDeviceRequest = (payload) => {
    return (dispatch) => {
        // Delete device locally
        dispatch({ type: "DELETE_DEVICE", payload: payload});
        API.graphql(graphqlOperation(deleteDevice, {input: {id: payload.deviceID}}))
            .then((response) => {
            console.log("response", response);
            dispatch(deleteDeviceSuccess());
        }).catch((err) => {
            console.log("Error pairing user to device: ", err);
            dispatch(disassociateDeviceFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const deleteDeviceFailure = (error) => {
    return {
        type: "DELETE_DEVICE_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const deleteDeviceSuccess = () => {
    return {
        type: "DELETE_DEVICE_SUCCESS",
    }
}

// =====================================---ASSIGN LOCATION TO DEVICE---=======================================

// Assign location to device in DynamoDB
export const assignLocationRequest = (payload) => {
    return (dispatch) => {
        API.graphql(graphqlOperation(updateDevice, {input: payload})).then((response) => {
            console.log(response);
            dispatch(assignLocationSuccess());
        }).catch((err) => {
            console.log("Error assigning location: ", err);
            dispatch(assignLocationFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const assignLocationFailure = (error) => {
    return {
        type: "ASSIGN_LOCATION_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const assignLocationSuccess = () => {
    return {
        type: "ASSIGN_LOCATION_SUCCESS",
    }
}

// Assign location to device locally
export const assignLocationLocal = (payload) => {
    return {
        type: "ASSIGN_LOCATION",
        payload: payload
    }
}

// =====================================---REMOVE LOCATION FROM DEVICE---=======================================

// Remove location from device locally and in DynamoDB
export const removeLocationRequest = (payload) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_LOCATION", payload: payload});
        API.graphql(graphqlOperation(updateDevice, {input: payload})).then((response) => {
            console.log(response);
            dispatch(removeLocationSuccess());
        }).catch((err) => {
            console.log("Error removing location: ", err);
            dispatch(removeLocationFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const removeLocationFailure = (error) => {
    return {
        type: "REMOVE_LOCATION_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const removeLocationSuccess = () => {
    return {
        type: "REMOVE_LOCATION_SUCCESS",
    }
}
