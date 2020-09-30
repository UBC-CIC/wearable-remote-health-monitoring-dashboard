const initialState = [];

// delete room
const deleteRoomHelper = (rooms, target) => {

    let newRooms = [...rooms];
    const index = newRooms.findIndex(room =>
        room.id === target.id
    );

    if (index !== -1) {
        newRooms.splice(index, 1);
    }

    return newRooms;

}


const roomReducer = (rooms = initialState, action) => {
    let newRooms = rooms;

    switch(action.type) {

        case "FETCH_ROOMS_SUCCESS": {
            return action.payload;
        }
        case "ADD_ROOM_REQUEST": {
            return [...newRooms, action.payload];
        }
        case "DELETE_ROOM_REQUEST": {
            return deleteRoomHelper(newRooms, action.payload);
        }
        default:
            return newRooms;
    }

}

export default roomReducer;