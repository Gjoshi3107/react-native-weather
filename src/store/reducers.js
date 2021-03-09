import { ADD_FORECAST, API_CALL, API_CALL_FAIL, API_CALL_SUCCESS } from './component(action type)';
// import console from 'console';

// const initState1 = {
//     cityName: {
//         forecastArray
//     },
//     cities: []
// };

const initState1 = {
    loading: false,
    network: true,
    geoLocation: [],
    forecast: {}
};

export default function myData(state = initState1, action) {
    switch (action.type) {
        case API_CALL_SUCCESS: {
            let [Cityy, temperature, Daye, timeStampe, Late, Longe] = action.payload.data;

            return {
                ...state,
                forecast: {
                    City: Cityy,
                    Temp: temperature,
                    Day: Daye,
                    TimeStamp: timeStampe,
                    Lat: Late,
                    Long: Longe
                },
                loading: false
            };
        }
        case API_CALL: {
            return {
                ...state,
                loading: true,
            }
        }
        case API_CALL_FAIL: {
            return {
                ...state,
                loading: false,
            }
        }
        case NO_NET: {
            return {
                ...state,
                network: false,
            }
        }
        case HAS_NET: {
            return {
                ...state,
                network: true,
            }
        }
        default:
            return state;
    }
}