<script setup>
import { ref } from "vue";

const inputValue = ref("");

const handleInput = () => {
  console.log(inputValue.value);
  inputValue.value = "";
};
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
</template>

<style scoped>
.color {
  color: black;
}
.input {
  border: 1px solid red;
  color: black;
}
.justTest {
  background-color: aliceblue;
}
.button {
  background-color: red;
  color: white;
  padding: 10px;
}
</style>
