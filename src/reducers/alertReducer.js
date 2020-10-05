

const initialAlerts = [];



const alertReducer = (alerts = initialAlerts, action) => {
    let newAlerts = [...alerts];
    switch (action.type) {
        case "FETCH_ALERTS_SUCCESS": {
            return action.payload.sort((a,b) => {
                return b.createdAt - a.createdAt;
            });
        }
        case "NEW_ALERT_RECEIVED": {
            return [action.payload, ...newAlerts];
        }
        default:
            return newAlerts;
    }
}



export default alertReducer;