import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import deviceReducer from "./deviceReducer";

export default combineReducers({
    alerts: alertReducer,
    users: userReducer,
    devices: deviceReducer,
});