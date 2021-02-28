import { create } from 'apisauce'


const APIKEY = "c8f2e3d506af866f270e60fd2d98f5e5";

const api = create({
  baseURL: 'http://maps.openweathermap.org',
  headers: { Accept: 'application/json' },
})



export function getAPIData(lat, long) {
  return api
    .get(`/maps/2.0/weather/CL/1/${lat}/${long}&appid=${APIKEY}`)
    // .then(response => response.data[0].commit.message)
    .then(response => {
      console.log(response.data.message)
      return response;
    })
    .catch(err => {
      console.log(err.data.message);
    })
}