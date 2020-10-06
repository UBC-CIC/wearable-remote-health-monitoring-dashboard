
const initialNotifications = {
    alertNotifications: [],
    actionNotifications: [],
};

// remove/dismiss alert notification
const removeAlert = (alerts, target) => {

    const index = alerts.findIndex(alert =>
        alert.id === target.id
    );

    if (index !== -1) {
        alerts.splice(index, 1);
    }

    return [...alerts];
}

const notificationReducer = (notifications = initialNotifications, action) => {
    switch (action.type) {
        case "NEW_ALERT_RECEIVED": {
            return {
                ...notifications,
                alertNotifications: [action.payload, ...notifications.alertNotifications],
            };
        }
        case "REMOVE_ALERT_NOTIFICATION": {
            return {
                ...notifications,
                alertNotifications: removeAlert(notifications.alertNotifications, action.payload)
            };
        }
        default:
            return notifications;
    }
}



export default notificationReducer;