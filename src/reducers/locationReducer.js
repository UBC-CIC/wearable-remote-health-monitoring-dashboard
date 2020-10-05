

const initialLocations = [];

// Deletes location from local state
const deleteLocationHelper = (locations, target) => {
    const index = locations.findIndex(location =>
        location.id === target.id
    );

    if (index !== -1) {
        locations.splice(index, 1);
    }

    return locations;
}


const locationReducer = (locations = initialLocations, action) => {
    let newLocationsList = [...locations];
    switch (action.type) {
        case "FETCH_LOCATIONS_SUCCESS": {
            return action.payload;
        }
        case "ADD_NEW_LOCATION_REQUEST": {
            return [...newLocationsList, action.payload];
        }
        case "DELETE_LOCATION_REQUEST": {
            return deleteLocationHelper(newLocationsList, action.payload);
        }
        default:
            return newLocationsList;
    }

};

export default locationReducer;