import axios, { AxiosInstance } from "axios";

interface WeatherApiParams {
  appid: string;
  units: string;
}

const weatherApi: AxiosInstance<WeatherApiParams> = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: import.meta.env.VITE_APIWEATHER as string,
    units: "metric",
  },
});

export default weatherApi;
