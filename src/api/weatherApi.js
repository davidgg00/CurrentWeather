import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.VUE_APP_APIWEATHER,
    units: "metric",
  },
});

export default weatherApi;
