import { create } from 'apisauce'
import { CALL_API, FAIL_API_CALL, SUCCESS_API_CALL } from '../action';


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
  console.log("date:- ", date);
  return dayArray[date.getDay()];
}

const api = ({ dispach, getstore }) => next => action => {
  if (action.type !== API_CALL)
    return next(action)

  try {
    dispach(CALL_API())
    const responseF = await api
      .get(`/data/2.5/onecall?lat=${action.payload.lat}&lon=${action.payload.long}&exclude=hourly,minutely&appid=${APIKEY}&units=metric`)

    const responseW = await api
      .get(`/data/2.5/weather?lat=${action.payload.lat}&lon=${action.payload.long}&appid=${APIKEY}&units=metric`)

    let tempC = [];
    let nextDay = [];
    let timestamp = null;
    tempC.push(responseF.data.current.temp);

    responseF.data.daily.forEach((element) => {
      tempC.push(element.temp.day);
      nextDay.push(tsToDay(element.dt));
    })

    let data = [responseW.data.name, tempC, nextDay, timestamp, action.payload.lat, action.payload.long];
    dispach(SUCCESS_API_CALL(data))
  }
  catch (err) {
    dispach(FAIL_API_CALL(err.data.message))
  }

}


export default api;