import { ADD_FORECAST, API_CALL, API_CALL_FAIL, API_CALL_SUCCESS, NO_NET } from './component(action type)';

export const STORE_FORECAST = data => ({
    type: ADD_FORECAST,
    payload: {
        data
    }
});


export const CALL_API = data => ({
    type: API_CALL,
    payload: {
        data
    }
});

export const FAIL_API_CALL = data => ({
    type: API_CALL_FAIL,
    payload: {
        data
    }
});

export const SUCCESS_API_CALL = data => ({
    type: API_CALL_SUCCESS,
    payload: {
        data
    }
});
export const NO_NETWORK = data => ({
    type: NO_NET,
    payload: {
        data
    }
});