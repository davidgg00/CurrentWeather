<template>
  <h1>Ciudad</h1>
  <div class="cityWeather" v-for="city in cities" :key="city.id">
    <p>{{ city.name }}</p>
    <p>{{ city.main.temp }} ºC</p>
    <p>{{ city.weather[0].main }}</p>
    <img
      :src="require('../assets/weatherIcons/' + city.weather[0].icon + '.png')"
    />
  </div>
</template>

<script>
export default {
  props: ["cities"],
};
</script>

<style scoped>
* {
  color: white;
}
</style>