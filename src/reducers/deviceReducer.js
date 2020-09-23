
const initialDevices = [
    {
        id: "4etr32",
        deviceStatus: "Inactive",
        associatedUserName: "John Smith",
        associatedUserID: "12345"
    },
    {
        id: "4etr35",
        deviceStatus: "Active",
        associatedUserName: "Jane Doe",
        associatedUserID: "58943"
    },
    {
        id: "5etr64",
        deviceStatus: "Active",
        associatedUserName: "Jessica Johnson",
        associatedUserID: "10851"
    },
    {
        id: "6etr78",
        deviceStatus: "Active",
        associatedUserName: "Philip Westinghouse",
        associatedUserID: "35836"
    },
];

const removeDeviceHelper = (devices, target) => {
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
        case "REGISTER_NEW_DEVICE": {
            return [...devices, action.payload];
        }
        case "UNPAIR_DEVICE": {
            return removeDeviceHelper(newDeviceList, action.payload);
        }
        default:
            return newDeviceList;
    }

};

export default deviceReducer;