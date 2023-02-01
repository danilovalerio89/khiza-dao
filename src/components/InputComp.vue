<script setup>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";

const inputStyle = ref({
  display: "flex",
  border: "2px solid white",
  width: "100px",
  "border-radius": "5px",
  padding: "8px",
  margin: "15px auto",
});

const inputFormat = ref("dd-MM-yyyy");
const startDate = ref(new Date());
const endDate = ref(new Date());

const inputValue = ref("");

const handleInput = () => {
  if (startDate.value > endDate.value) {
    return console.log("Errooooooooo");
  }
  return console.log("Deeeeeeeeeeeeeu");
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
    <button class="button" @click="handleInput()">Procurar</button>
  </v-container>

  <v-container class="mt-4 mb-4 mx-auto">
    <v-row align="center" justify="center" class="w-100">
      <v-col cols="6">
        <p class="text-center text-left">
          De: {{ startDate.toLocaleDateString("pt-BR") }}
        </p>
        <Datepicker
          v-model="startDate"
          :style="inputStyle"
          :inputFormat="inputFormat"
        />
      </v-col>

      <v-col cols="6">
        <p class="text-center">
          Até: {{ endDate.toLocaleDateString("pt-BR") }}
        </p>
        <Datepicker v-model="endDate" :style="inputStyle" />
      </v-col>
    </v-row>

    <v-divider></v-divider>
  </v-container>
</template>

<style scoped>
.color {
  color: white;
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
