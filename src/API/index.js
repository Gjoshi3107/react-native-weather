import { create } from 'apisauce'


const APIKEY = "582693e63b3788fe06edb0f47229f759";

const api = create({
  baseURL: 'https://api.openweathermap.org',
  headers: { Accept: 'application/json' },
})



export async function getAPIData(lat, long) {
  return await api
    .get(`/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${APIKEY}`)
    // .then(response => response.data[0].commit.message)
    .then(response => {
      console.log("response\n", response.data);
      return response;
    })
    .catch(err => {
      console.log(err.data.message);
    })
}