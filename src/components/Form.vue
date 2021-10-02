<template>
  <form @submit.prevent="$emit('city', cityName)">
    <input
      type="text"
      placeholder="Search for a city"
      v-model="cityName"
      autofocus
    />
    <button type="submit">SUBMIT</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["city"],
  setup() {
    const cityName = ref(null);

    return { cityName };
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
</style>