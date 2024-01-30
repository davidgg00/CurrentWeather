<template>
  <form @submit.prevent="searchCity">
    <input type="text" placeholder="Search for a city" v-model="cityName" autofocus />
    <button type="submit">SUBMIT</button><br />
    <span :style="{ visibility: repeatedCity ? 'visible' : 'hidden' }">The city you are looking for is already showing on
      the screen</span><br />
    <span :style="{ visibility: cityNotFound ? 'visible' : 'hidden' }">The city you were looking for could not be
      found</span>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import weatherApi from "../../api/weatherApi";

const { repeatedCity }: { repeatedCity?: boolean } = defineProps(["repeatedCity"]);
const cityName = ref<string | null>(null);
const cityNotFound = ref<string | null>(null);
const emit = defineEmits(["cityData"]);

async function searchCity(): Promise<void> {
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
    console.log(error);
    cityNotFound.value = "The city you were looking for could not be found";
  }
}
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
  margin-top: 40px;
  font-weight: bold;
}
</style>
