
const initialDevices = [
    {
        id: "4etr32",
        devicePaired: true,
        deviceStatus: "Inactive",
        associatedUserName: "John Smith",
        associatedUserID: "12345"
    },
    {
        id: "4etr35",
        devicePaired: true,
        deviceStatus: "Active",
        associatedUserName: "Jane Doe",
        associatedUserID: "58943"
    },
    {
        id: "5etr64",
        devicePaired: true,
        deviceStatus: "Active",
        associatedUserName: "Jessica Johnson",
        associatedUserID: "10851"
    },
    {
        id: "6etr78",
        devicePaired: true,
        deviceStatus: "Active",
        associatedUserName: "Philip Westinghouse",
        associatedUserID: "35836"
    },
];

const deviceReducer = (devices = initialDevices, action) => {
    let newDeviceList = [...devices];
    switch (action.type) {
        case "ADD_NEW_DEVICE": {
            return newDeviceList.push(action.payload);
        }
        default:
            return newDeviceList;
    }

};

export default deviceReducer;