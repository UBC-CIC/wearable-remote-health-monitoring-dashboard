
const initialNotifications = {
    alertNotifications: [],
    actionNotifications: [],
};



const notificationReducer = (notifications = initialNotifications, action) => {
    switch (action.type) {
        case "NEW_ALERT_RECEIVED": {
            return {
                ...notifications,
                alertNotifications: [action.payload, ...notifications.alertNotifications],
            };
        }
        default:
            return notifications;
    }
}



export default notificationReducer;