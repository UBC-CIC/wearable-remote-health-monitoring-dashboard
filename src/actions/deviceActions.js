import { API, graphqlOperation } from 'aws-amplify';
import { listDevices } from '../graphql/queries';
import {createDevice, updateDevice, updateUser} from '../graphql/mutations';


// Removes device from local store, and removes the device from the associated user
export const unpairDevice = (payload) => {
    return {
        type: "UNPAIR_DEVICE",
        payload: payload
    }
}


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
            console.log("response", response);
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
                deviceAssociatedUserId: payload.user.id}})).then((response) => {
            console.log("response", response);
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
            console.log("response", response);
        }).catch((err) => {
            console.log("Error pairing device to user: ", err);
            dispatch(associateDeviceFailure(err));
        })
    }
}

// ====================================================================================================