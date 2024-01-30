<template>
  <div class="cityWeather animate__animated animate__fadeInLeft" v-for="city in cities" :key="city.id">
    <p>{{ city.name }}</p>
    <p>{{ roundedTemperature(city.main.temp) }}</p>
    <p>{{ city.weather[0].main }}</p>
    <img :src="getWeatherIconPath(city.weather[0].icon)" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { cities }: { cities?: Array<any> } = defineProps(["cities"]);

const roundedTemperature = (temp: number): string => {
  return Math.round(temp) + " ºC";
};

const getWeatherIconPath = (icon: string): string => {
  return `../src/assets/weatherIcons/${icon}.png`;
};
</script>

<style scoped>
.cityWeather {
  padding: 30px 0px;
  border-radius: 20px;
  background: #fff;
  color: #53627c;
}

p {
  font-size: 1.5em;
}
</style>
