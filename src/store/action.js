import {
    LOADER,
    CALL_API,
    API_CALL_SUCCESS,
    API_CALL_FAIL,
    NET,
    GET_LOCATION,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILED
} from './component(action type)';

export const GEO_LOCATION = data => ({
    type: GET_LOCATION,
    payload: {
        data
    }
})

export const SAVE_LOCATION = data => ({
    type: GET_LOCATION_SUCCESS,
    payload: {
        data
    }
})

export const FAIL_GEO_LOCATION = data => ({
    type: GET_LOCATION_FAILED,
    payload: {
        data
    }
})

export const GET_LOADER = data => ({
    type: LOADER,
    payload: {
        data
    }
});

export const API_CALL = data => ({
    type: CALL_API,
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
export const FAIL_API_CALL = data => ({
    type: API_CALL_FAIL,
    payload: {
        data
    }
});

export const NETWORK = data => ({
    type: NET,
    payload: {
        data
    }
});