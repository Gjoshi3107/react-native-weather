import { FORECAST } from './component(action type)';
// import console from 'console';

const initState1 = {
    days: [],
    forecast: {}
};

export function myData(state = initState1, action) {


    // console.log(action.payload);
    switch (action.type) {
        case FORECAST: {
            let [Datee, Daye, Forecaste] = action.payload.data;

            return {
                ...state,
                days: state.days.concat({
                    Date: Datee,
                }),
                forecast: {
                    ...state.forecast,
                    [Datee]: {
                        Day: Daye,
                        Forecast: Forecaste,
                    }
                }
            };
        }
        default:
            return state;
    }
}