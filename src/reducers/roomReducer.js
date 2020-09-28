const initialState = [];


const roomReducer = (rooms = initialState, action) => {
    let newRooms = rooms;

    switch(action.type) {

        case "FETCH_ROOMS_SUCCESS": {
            return action.payload;
        }
        default:
            return newRooms;
    }

}

export default roomReducer;