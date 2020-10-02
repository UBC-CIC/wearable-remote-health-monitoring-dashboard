
const initialDevices = [];


const pairDeviceHelper = (devices, payload) => {
    devices.forEach(device => {
        if (device.id === payload.device.id) {
            device.userID = payload.user.id;
        }
    })

    return devices;
}

const unpairDeviceHelper = (devices, payload) => {
    devices.forEach(device => {
        if (device.id === payload.deviceID) {
            device.userID = null;
        }
    })

    return devices;
}


const deleteDeviceHelper = (devices, target) => {
    const index = devices.findIndex(device =>
        device.id === target.deviceID
    );

    if (index !== -1) {
        devices.splice(index, 1);
    }

    return devices;
}

const deviceReducer = (devices = initialDevices, action) => {
    let newDeviceList = [...devices];
    switch (action.type) {
        case "FETCH_DEVICES_SUCCESS": {
            return action.payload;
        }
        case "REGISTER_NEW_DEVICE": {
            return [...devices, action.payload];
        }
        case "ASSOCIATE_NEW_DEVICE": {
            return pairDeviceHelper(newDeviceList, action.payload);
        }
        case "DISASSOCIATE_DEVICE": {
            return unpairDeviceHelper(newDeviceList, action.payload);
        }
        case "DELETE_DEVICE": {
            return deleteDeviceHelper(newDeviceList, action.payload);
        }
        case "UNPAIR_DEVICE": {
            return newDeviceList;
        }
        default:
            return newDeviceList;
    }

};

export default deviceReducer;