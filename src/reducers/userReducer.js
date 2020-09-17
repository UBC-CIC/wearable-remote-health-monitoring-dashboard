const initalUsers = [
    {id: "12345", firstName: "John", lastName: "Smith", age: 75, device: {},
        assignedGeofencing: [{id: "1234", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "12345", status: {code: 1, description: "DEVICE NOT CONNECTED"},
        vitals: {id: "123", heartRate: 0}, facility: "Vancouver Care Center", room: "", phoneNumber: "888-888-8888", email: "example@example.com",
    emergencyContacts: [], careGivers: [],
        address: {id: "4et4", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "58943", firstName: "Jane", lastName: "Doe", age: 83, device: {},
        assignedGeofencing: [{id: "1236", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "58943", status: {code: 0, description: "NORMAL"},
        vitals: {id: "125", heartRate: 96}, facility: "Vancouver Care Center", room: "", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et5", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "10851", firstName: "Jessica", lastName: "Johnson", age: 91, device: {},
        assignedGeofencing: [{id: "1238", locationName: "outside facility", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "10851", status: {code: 4, description: "OUT OF BOUNDS"},
        vitals: {id: "126", heartRate: 85}, facility: "Vancouver Care Center", room: "", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et6", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "35836", firstName: "Philip", lastName: "Westinghouse", age: 78, device: {},
        assignedGeofencing: [{id: "1239", locationName: "bedroom", perimeterCoordinates:[]}],
        profileImageURL: "https://i.imgur.com/6HAYO4e.png", profileURL: "35836", status: {code: 3, description: "HEART RATE HIGH"},
        vitals: {id: "127", heartRate: 160}, facility: "Vancouver Care Center", room: "", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et7", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
];



const userReducer = (users = initalUsers, action) => {
    let newUsers = [...users];
    switch (action.type) {
        case "REGISTER_NEW_USER": {
            return newUsers.concat(action.payload);
        }
        default:
            return newUsers;
    }
}



export default userReducer;