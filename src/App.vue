<template>
  <div class="animate__animated animate__fadeIn">
    <h1>Current Weather App</h1>
    <img alt="logo" src="./assets/logo3.svg" id="logo" />
    <Form @cityData="addCity" :repeatedCity="repeatedCity" />
    <div id="wrapperCities">
      <CityWeather :cities="cities" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Form from "./components/Form.vue";
import CityWeather from "./components/CityWeather.vue";

interface City {
  id: number;
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

const cities = ref<City[]>([]);
const repeatedCity = ref(false);

const addCity = (obj: City): void => {
  if (cities.value.findIndex((s) => s.id == obj.id) === -1) {
    cities.value.push(obj);
    repeatedCity.value = false;
  } else {
    repeatedCity.value = true;
  }
};
</script>

<style>
body {
  background: #0a1f44;
  margin: 0;
  /* Agregado para quitar el margen predeterminado del body */
}

h1 {
  font-weight: bold;
  color: white;
  letter-spacing: 0.08em;
  margin-top: 20px;
  /* Añadido un espacio superior al h1 */
}

#logo {
  max-width: 100%;
  width: 250px;
  margin-top: 10px;
  /* Añadido un espacio superior al logo */
}

#app {
  width: 80%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
}

#wrapperCities {
  margin: 30px auto 20px auto;
  display: grid;
  grid-gap: 32px 20px;
  grid-template-columns: repeat(4, 1fr);
}

/* Media queries mantienen la estructura original */
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
