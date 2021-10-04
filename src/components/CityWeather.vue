<template>
  <div class="cityWeather" v-for="city in cities" :key="city.id">
    <p>{{ city.name }}</p>
    <p>{{ roundedTemperature(city.main.temp) }}</p>
    <p>{{ city.weather[0].main }}</p>
    <img
      :src="require('../assets/weatherIcons/' + city.weather[0].icon + '.png')"
    />
  </div>
</template>

<script>
export default {
  props: ["cities"],
  setup() {
    /* const roundedTemperature = computed((temp) => Math.round(temp)); */
    return {
      roundedTemperature: (temp) => {
        return Math.round(temp) + " ºC";
      },
    };
  },
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