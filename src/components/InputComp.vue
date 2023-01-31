<script setup>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";

const customStyle = ref({
  "--vdp-bg-color": "#5c5c5c",
  "--vdp-text-color": "#d9d9d9",
  "--vdp-box-shadow":
    "0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",
  "--vdp-border-radius": "3px",
  "--vdp-heading-size": "2.5em",
  "--vdp-heading-weight": "bold",
  "--vdp-heading-hover-color": "#eeeeee",
  "--vdp-arrow-color": "currentColor",
  "--vdp-elem-color": "currentColor",
  "--vdp-disabled-color": "#d5d9e0",
  "--vdp-hover-color": "#ffffff",
  "--vdp-hover-bg-color": "#0baf74",
  "--vdp-selected-color": "#ffffff",
  "--vdp-selected-bg-color": "#0baf74",
  "--vdp-current-date-outline-color": "#888888",
  "--vdp-current-date-font-weight": "bold",
  "--vdp-elem-font-size": "0.8em",
  "--vdp-elem-border-radius": "3px",
  "--vdp-divider-color": "currentColor",
});

// const inputValue = ref("");
const picked = ref(new Date());
// const handleInput = () => {
//   console.log(inputValue.value);
//   inputValue.value = "";
// };
</script>

<template>
  <v-container align="center" justify="center" class="justTest">
    <p class="color">Meu valor: {{ inputValue }}</p>
    <input
      placeholder="meu input"
      class="input"
      v-model="inputValue"
      @input="(event) => (inputValue = event.target.value)"
    />
    <button class="button" @click="handleInput">Procurar</button>
  </v-container>
  <v-row justify="center"> </v-row>
  <div>
    <Datepicker v-model="picked" :style="customStyle" />
  </div>
</template>

<style scoped>
.color {
  color: black;
  background-color: blue;
}
.input {
  border: 1px solid red;
  color: black;
}

.button {
  background-color: red;
  color: white;
  padding: 10px;
}
</style>
