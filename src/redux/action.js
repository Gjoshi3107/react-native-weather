import { FORECAST } from './component(action type)';

export const STORE_FORECAST = (data) => ({
    type: FORECAST,
    payload: {
        data
    }
});
