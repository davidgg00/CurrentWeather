<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form @cityData="addCity" />
  <div id="wrapperCities">
    <CityWeather :cities="cities" />
  </div>
</template>

<script>
import { ref } from "vue";
import Form from "./components/Form.vue";
import CityWeather from "./components/CityWeather.vue";

export default {
  name: "App",
  components: {
    Form,
    CityWeather,
  },
  setup() {
    const cities = ref([]);

    return {
      cities,
      addCity: (obj) => {
        console.log(obj);
        cities.value.push(obj);
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
