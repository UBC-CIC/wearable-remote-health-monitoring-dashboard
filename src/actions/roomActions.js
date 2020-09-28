import { API, graphqlOperation } from 'aws-amplify';
import { listRooms } from '../graphql/queries';

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
// ================================================================================================