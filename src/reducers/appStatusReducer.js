const initialState = {
    startupLoading: true,
    usersFetched: false,
    roomsFetched: false,
    devicesFetched: false,
    errorState: false,
    errorMessage: "",
}

// Returns true if all other data has been successfully fetched. Prevents a race condition.
const isLastToLoad = (appStatus) => {
    let falseCount = 0;
    if (appStatus.usersFetched === false) {
        falseCount += 1;
    }
    if (appStatus.roomsFetched === false) {
        falseCount += 1;
    }
    if (appStatus.devicesFetched === false) {
        falseCount += 1;
    }

    return falseCount === 1;
}


const appStatusReducer = (appStatus = initialState, action) => {
    let newAppStatus = appStatus;
    // checks if all other data has been retrieved. Required to prevent a race condition.
    let lastToLoad = isLastToLoad(appStatus);


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
                startupLoading: !(lastToLoad),
                usersFetched: true,
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
        case "FETCH_ROOMS_REQUEST": {
            return {
                ...newAppStatus,
                startupLoading: true,
            }
        }
        case "FETCH_ROOMS_SUCCESS": {
            return {
                ...newAppStatus,
                startupLoading: !(lastToLoad),
                roomsFetched: true,
            }
        }
        case "FETCH_ROOMS_FAILURE": {
            return {
                ...newAppStatus,
                startupLoading: false,
                errorState: true,
                errorMessage: action.payload,
            }
        }
        case "FETCH_DEVICES_REQUEST": {
            return {
                ...newAppStatus,
                startupLoading: true,
            }
        }
        case "FETCH_DEVICES_SUCCESS": {
            return {
                ...newAppStatus,
                startupLoading: !(lastToLoad),
                devicesFetched: true,
            }
        }
        case "FETCH_DEVICES_FAILURE": {
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