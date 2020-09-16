const initalUsers = [
    {id: "12345", firstName: "John", lastName: "Smith", device: {},
        geolocations: [{id: "1234", locationName: "bedroom", perimeterCoordinates:[]}],
        imageURL: "", status: {code: 2, description: "LOST CONTACT"},
        vitals: {id: "123", heartRate: 110}, facility: "Vancouver Care Center", phoneNumber: "888-888-8888", email: "example@example.com",
    emergencyContacts: [], careGivers: [],
        address: {id: "4et4", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "58943", firstName: "Jane", lastName: "Doe", device: {},
        geolocations: [{id: "1236", locationName: "bedroom", perimeterCoordinates:[]}],
        imageURL: "", status: {code: 0, description: "NORMAL"},
        vitals: {id: "125", heartRate: 96}, facility: "Vancouver Care Center", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et5", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "10851", firstName: "Jessica", lastName: "Johnson", device: {},
        geolocations: [{id: "1238", locationName: "outside facility", perimeterCoordinates:[]}],
        imageURL: "", status: {code: 4, description: "OUT OF BOUNDS"},
        vitals: {id: "126", heartRate: 85}, facility: "Vancouver Care Center", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et6", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
    {id: "35836", firstName: "Philip", lastName: "Westinghouse", device: {},
        geolocations: [{id: "1239", locationName: "bedroom", perimeterCoordinates:[]}],
        imageURL: "", status: {code: 3, description: "HEART RATE HIGH"},
        vitals: {id: "127", heartRate: 160}, facility: "Vancouver Care Center", phoneNumber: "888-888-8888", email: "example@example.com",
        emergencyContacts: [], careGivers: [],
        address: {id: "4et7", streetAddress: "555 CIC Street", city: "Vancouver", stateProvince: "BC", country: "Canada", postalZip: "V5Z 3E8"}, healthNotes: ""},
];



const userReducer = (users = initalUsers, action) => {
    return users;
}



export default userReducer;