const initialState = {
    startupLoading: true,
    errorState: false,
    errorMessage: "",
}


const appStatusReducer = (appStatus = initialState, action) => {
    let newAppStatus = appStatus;

    switch(action.type) {
        case "FETCH_USERS_REQUEST": {
            return {
                ...newAppStatus,
                startupLoading: true,
            }
        }
        case "FETCH_USERS_SUCCESS": {
            return {
                ...newAppStatus,
                startupLoading: false,
            }
        }

        case "FETCH_USERS_FAILURE": {
            return {
                ...newAppStatus,
                startupLoading: false,
                errorState: true,
                errorMessage: action.payload,
            }
        }
        default:
            return newAppStatus;
    }

}

export default appStatusReducer;