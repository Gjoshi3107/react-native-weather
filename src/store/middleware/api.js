import { create } from 'apisauce'
import { FAIL_API_CALL, SUCCESS_API_CALL } from '../action';
import { CALL_API } from '../component(action type)';

const APIKEY = "582693e63b3788fe06edb0f47229f759";

const api = create({
  baseURL: 'https://api.openweathermap.org',
  headers: { Accept: 'application/json' },
})

function tsToDay(timestamp) {
  var dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var d = new Date(0);
  let x = d.setUTCSeconds(timestamp);
  let date = new Date(x);
  return dayArray[date.getDay()];
}

const apiData = ({ dispatch, getState }) => next => async action => {
  if (action.type !== CALL_API)
    return next(action)

  try {
    var state = getState();
    const responseF = await api
      .get(`/data/2.5/onecall?lat=${state.geoLocation[0]}&lon=${state.geoLocation[1]}&exclude=hourly,minutely&appid=${APIKEY}&units=metric`)

    const responseW = await api
      .get(`/data/2.5/weather?lat=${state.geoLocation[0]}&lon=${state.geoLocation[1]}&appid=${APIKEY}&units=metric`)

    console.log("responseF:-", responseF);
    console.log("responseW:-", responseW);
    let tempC = [];
    let nextDay = [];
    let timestamp = responseF.data.current.dt;
    // tempC.push(responseF.data.current.temp);

    responseF.data.daily.forEach((element) => {
      tempC.push(element.temp.day);
      nextDay.push(tsToDay(element.dt));
    })
    let data = [responseW.data.name, tempC, nextDay, timestamp];
    dispatch(SUCCESS_API_CALL(data));
  }
  catch (err) {
    dispatch(FAIL_API_CALL(err.data.message))
  }

}


export default apiData;