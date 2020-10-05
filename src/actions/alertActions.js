import { API, graphqlOperation } from 'aws-amplify';
import {onCreateAlert} from "../graphql/subscriptions";
import {listAlerts} from "../graphql/queries";

// ====================================---ALERT SUBSCRIPTION---==========================================
// Subscribe to alerts, sets realtime connection status flag
export const subscribeAlerts = () => {
    return (dispatch) => {
        dispatch({type: "ALERT_SUBSCRIPTION_INITIATED"});
        try {
            API.graphql(graphqlOperation(onCreateAlert)).subscribe({
                next: alert => {
                    console.log("new alert: ", alert.value.data.onCreateAlert);
                    dispatch(newAlertReceived(alert.value.data.onCreateAlert));
                }
            })
        } catch (err) {
            dispatch(subscribeAlertsFailure(err));
            console.log("Alert error: ", err);
        }

    }
}

// Error/Connection closed, unset realtime connection status flag
export const subscribeAlertsFailure = (err) => {
    return {
        type: "ALERT_SUBSCRIPTION_CLOSED",
        payload: err
    }
}

// add new alerts to local state
export const newAlertReceived = (payload) => {
    return {
        type: "NEW_ALERT_RECEIVED",
        payload: payload
    }
}

// ====================================---FETCH ALERTS---==========================================

// Fetch alerts from DynamoDB, set loading flag
export const fetchAlerts = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_ALERTS_REQUEST" });
        API.graphql(graphqlOperation(listAlerts)).then((response) => {
            const alerts = response.data.listAlerts.items;
            dispatch(fetchAlertsSuccess(alerts));
        }).catch((err) => {
            console.log("Error fetching alerts: ", err);
            dispatch(fetchAlertsFailure(err));
        })
    }
}

// NOT YET IMPLEMENTED: respond to failure condition
export const fetchAlertsFailure = (error) => {
    return {
        type: "FETCH_ALERTS_FAILURE",
        payload: error
    }
}

// Success condition, update local state with fetched alerts data
export const fetchAlertsSuccess = (payload) => {
    return {
        type: "FETCH_ALERTS_SUCCESS",
        payload: payload
    }
}
