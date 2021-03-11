import {
    LOADER,
    API_CALL_SUCCESS,
    API_CALL_FAIL,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILED,
    NET
} from './component(action type)';

const initState1 = {
    loading: true,
    network: true,
    hasApiError: false,
    geoLocation: [],
    forecast: {
        City: null,
        Temp: null,
        Day: null,
        TimeStamp: null,
    }
};

export default function myData(state = initState1, action) {
    switch (action.type) {
        case API_CALL_SUCCESS: {
            let [Cityy, temperature, Daye, timeStampe] = action.payload.data;

            return {
                ...state,
                forecast: {
                    City: Cityy,
                    Temp: temperature,
                    Day: Daye,
                    TimeStamp: timeStampe
                },
                loading: false,
                hasApiError: false
            };
        }
        case API_CALL_FAIL: {
            console.log("API CALL FAILED:_\n", action.payload);
            return {
                ...state,
                hasApiError: true,
                loading: false
            }
        }
        case LOADER: {
            console.log("LOADER payload:-", action.payload);
            return {
                ...state,
                loading: action.payload.data
            }
        }
        case NET: {
            return {
                ...state,
                network: action.payload.data
            }
        }
        case GET_LOCATION_SUCCESS: {
            console.log("GET_LOCATION_SUCCESS payload:-", action.payload);
            return {
                ...state,
                geoLocation: [action.payload.data[0], action.payload.data[1]]
            }
        }
        case GET_LOCATION_FAILED: {
            return {
                ...state,
                geoLocation: [],
                loading: false,
                hasApiError: true
            }
        }
        default:
            return state;
    }
}