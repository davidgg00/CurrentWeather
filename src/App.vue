<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form @cityData="addCity" :repeatedCity="repeatedCity" />
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
    const repeatedCity = ref(false);

    return {
      cities,
      repeatedCity,
      addCity: (obj) => {
        if (cities.value.findIndex((s) => s.id == obj.id) === -1) {
          cities.value.push(obj);
          repeatedCity.value = false;
        } else {
          repeatedCity.value = true;
        }
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

#wrapperCities {
  margin: 70px 0 20px;
  display: grid;
  grid-gap: 32px 20px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
