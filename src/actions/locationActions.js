import { API, graphqlOperation } from 'aws-amplify';
import { createLocation, deleteLocation } from '../graphql/mutations';
import {listLocations} from "../graphql/queries";

// ===================================---FETCH LOCATIONS---=============================================
// Fetch locations from AWS, set loading flag
export const fetchLocations = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_LOCATIONS_REQUEST" });
        API.graphql(graphqlOperation(listLocations)).then((response) => {
            const locations = response.data.listLocations.items;
            dispatch(fetchLocationsSuccess(locations));
        }).catch((err) => {
            console.log("Error fetching locations: ", err);
            dispatch(fetchLocationsFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchLocationsFailure = (error) => {
    return {
        type: "FETCH_LOCATIONS_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched location data, remove loading flag
export const fetchLocationsSuccess = (payload) => {
    return {
        type: "FETCH_LOCATIONS_SUCCESS",
        payload: payload
    }
}

// =====================================---ADDING NEW LOCATION---=======================================

// Add new location locally and to DynamoDB
export const addNewLocation = (payload) => {
    return (dispatch) => {
        dispatch({type: "ADD_NEW_LOCATION_REQUEST", payload: payload});
        API.graphql(graphqlOperation(createLocation, {input: payload})).then((response) => {
            console.log(response);
            dispatch(addNewLocationSuccess());
        }).catch((err) => {
            console.log("Error adding new location: ", err);
            dispatch(addNewLocationFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const addNewLocationFailure = (error) => {
    return {
        type: "ADD_NEW_LOCATION_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const addNewLocationSuccess = () => {
    return {
        type: "ADD_NEW_LOCATION_SUCCESS",
    }
}

// =====================================---DELETING LOCATION---=======================================

// Delete location locally and in DynamoDB
export const deleteLocationRequest = (payload) => {
    return (dispatch) => {
        dispatch({type: "DELETE_LOCATION_REQUEST", payload: payload});
        API.graphql(graphqlOperation(deleteLocation, {input: payload})).then((response) => {
            console.log(response);
            dispatch(deleteLocationSuccess());
        }).catch((err) => {
            console.log("Error deleting location: ", err);
            dispatch(deleteLocationFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const deleteLocationFailure = (error) => {
    return {
        type: "DELETE_LOCATION_FAILURE",
        payload: error
    }
}

// NOT YET IMPLEMENTED: respond to success condition
export const deleteLocationSuccess = () => {
    return {
        type: "DELETE_LOCATION_SUCCESS",
    }
}

