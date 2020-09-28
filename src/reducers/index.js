import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import deviceReducer from "./deviceReducer";
import appStatusReducer from "./appStatusReducer";
import roomReducer from "./roomReducer";

export default combineReducers({
    alerts: alertReducer,
    users: userReducer,
    devices: deviceReducer,
    applicationStatus: appStatusReducer,
    rooms: roomReducer,
});