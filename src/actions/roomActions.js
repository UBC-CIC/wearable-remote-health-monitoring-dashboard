import { API, graphqlOperation } from 'aws-amplify';
import { listRooms } from '../graphql/queries';
import { createRoom, deleteRoom, updateUser } from '../graphql/mutations';

// ===================================---FETCHING ROOMS---=======================================
// Fetch rooms from AWS, set loading flag
export const fetchRooms = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_ROOMS_REQUEST" });
        API.graphql(graphqlOperation(listRooms)).then((response) => {
            const rooms = response.data.listRooms.items;
            dispatch(fetchRoomsSuccess(rooms));
        }).catch((err) => {
            console.log("Error fetching rooms: ", err);
            dispatch(fetchRoomsFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchRoomsFailure = (error) => {
    return {
        type: "FETCH_ROOMS_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched room data
export const fetchRoomsSuccess = (payload) => {
    return {
        type: "FETCH_ROOMS_SUCCESS",
        payload: payload
    }
}
// ===================================---ADDING NEW ROOM---=======================================

// Add new room to local state and DynamoDB
export const addNewRoom = (payload) => {
    return (dispatch) => {
        dispatch({ type: "ADD_ROOM_REQUEST", payload: payload });
        API.graphql(graphqlOperation(createRoom, {input: payload})).then((response) => {
            dispatch(addRoomSuccess());
        }).catch((err) => {
            console.log("Error adding room: ", err);
            dispatch(addRoomFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const addRoomFailure = (error) => {
    return {
        type: "ADD_ROOM_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched room data
export const addRoomSuccess = () => {
    return {
        type: "ADD_ROOM_SUCCESS",
    }
}

// ===================================---DELETING A ROOM---=======================================

// Delete room locally and from DynamoDB
export const deleteRoomRequest = (payload) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_ROOM_REQUEST", payload: payload });
        API.graphql(graphqlOperation(deleteRoom, {input: payload})).then((response) => {
            // delete room from User
            //dispatch(deleteRoomFromUserRequest());
            dispatch(deleteRoomSuccess());
        }).catch((err) => {
            console.log("Error deleting room: ", err);
            dispatch(deleteRoomFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const deleteRoomFailure = (error) => {
    return {
        type: "DELETE_ROOM_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const deleteRoomSuccess = () => {
    return {
        type: "DELETE_ROOM_SUCCESS",
    }
}

// TODO: Delete Room from User in DynamoDB (need user data from rooms first)
/*
export const deleteRoomFromUserRequest = () => {
    return (dispatch) => {
        API.graphql(graphqlOperation(updateUser)).then((response) => {

        }).catch((err) => {
            console.log("Error deleting room from User: ", err);
            dispatch(deleteRoomFailure(err));
        })
    }
}*/
