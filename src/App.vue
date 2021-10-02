<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Searched City: {{ city }}</p>
  <Form @city="addCity" />
</template>

<script>
import { ref } from "vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
  setup() {
    const city = ref(null);
    return {
      addCity: (cityName) => (city.value = cityName),
      city,
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
