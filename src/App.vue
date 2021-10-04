<template>
  <h1>Current Weather App</h1>
  <img alt="logo" src="./assets/logo3.svg" id="logo" />
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
h1 {
  font-weight: bold;
  color: white;
  letter-spacing: 0.08em;
}

#logo {
  max-width: 100%;
  width: 250px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 40px auto;
}

#wrapperCities {
  margin: 30px auto 20px auto;
  display: grid;
  grid-gap: 32px 50px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
}

@media (max-width: 900px) {
  #wrapperCities {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }
}

@media (max-width: 600px) {
  #wrapperCities {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
}

@media (max-width: 400px) {
  #app {
    width: 100%;
  }
  h1 {
    margin: 0 auto;
  }
}
</style>
