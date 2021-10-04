<template>
  <form @submit.prevent="searchCity">
    <input
      type="text"
      placeholder="Search for a city"
      v-model="cityName"
      autofocus
    />
    <button type="submit">SUBMIT</button><br />
    <span :style="{ visibility: repeatedCity ? 'visible' : 'hidden' }"
      >The city you are looking for is already showing on the screen</span
    ><br />
    <span :style="{ visibility: cityNotFound ? 'visible' : 'hidden' }"
      >The city you were looking for could not be found</span
    >
  </form>
</template>

<script>
import { ref } from "vue";
import weatherApi from "../api/weatherApi";
export default {
  emits: ["cityData"],
  props: ["repeatedCity"],
  setup(_, { emit }) {
    const cityName = ref(null);
    const cityNotFound = ref(null);

    async function searchCity() {
      try {
        const { data } = await weatherApi.get("", {
          params: {
            q: cityName.value,
          },
        });
        const { id, name, main, weather } = data;
        emit("cityData", { id, name, main, weather });
        cityNotFound.value = null;
        cityName.value = null;
      } catch (error) {
        cityNotFound.value = "The city you were looking for could not be found";
      }
    }

    return { cityName, searchCity, cityNotFound };
  },
};
</script>

<style scoped>
* {
  color: white;
}

button,
input {
  border: none;
  background: none;
  outline: none;
  color: inherit;
  margin: 0 5px;
}

input {
  -webkit-appearance: none;
  font-size: 2rem;
  border-bottom: 1px solid white;
  padding: 5px 5px 10px;
}

button {
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #ff1e42;
}

span {
  color: #d9534f;
}
</style>