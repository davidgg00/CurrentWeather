import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: "d3a6ebf3a66c09878a9e6c6db2315ba9",
    units: "metric",
  },
});

export default weatherApi;
