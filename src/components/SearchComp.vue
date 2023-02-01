<script setup>
import { ref, inject } from "vue";
import Datepicker from "vue3-datepicker";
import { coinsData } from "../data/coinData";
import { useCoinNameStore } from "../stores/coinNameStore";
import findKeyOrValue from "../utils/coinExists";

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

const newValue = ref("");
const inputValue = inject("inputValue");
const verifyCoin = ref("");

const handleInput = () => {
  const verifyInputEmpty = newValue.value.length;
  if (verifyInputEmpty === 0) {
    console.log("Aqui");
    return;
  }
  // const coinKeyOrValue = newValue.value;
  const coinStore = useCoinNameStore();
  console.log(coinStore.coinsObj);
  // const verifyCoinExists = findKeyOrValue(coinKeyOrValue, )

  if (findKeyOrValue(newValue, coinsData)) {
    console.log("existe");
  }
  console.log(verifyCoin);
  inputValue.value = newValue.value;
  return (newValue.value = "");
};
</script>

<template>
  <v-container align="center" justify="center">
    <h2 class="color">Procurar outra moeda</h2>
    <input
      placeholder="Ex: Bitcoin/BTC"
      class="input"
      v-model="newValue"
      @input="(event) => (newValue = event.target.value)"
    />
    <button class="button" @click="handleInput()">Procurar</button>
  </v-container>

  <v-container class="mt-4 mb-4 mx-auto">
    <v-row align="center" justify="center" class="w-100">
      <v-col cols="3">
        <p class="text-center text-left">
          De: {{ startDate.toLocaleDateString("pt-BR") }}
        </p>
        <Datepicker
          v-model="startDate"
          :style="inputStyle"
          :inputFormat="inputFormat"
        />
      </v-col>

      <v-col cols="3">
        <p class="text-center">
          Até: {{ endDate.toLocaleDateString("pt-BR") }}
        </p>
        <Datepicker v-model="endDate" :style="inputStyle" />
      </v-col>
    </v-row>
    <v-divider class="mt-12"></v-divider>
  </v-container>
</template>

<style scoped>
.color {
  color: white;
}
.input {
  margin: 15px 0;
  border: 1px solid white;
  border-radius: 5px 0 0 5px;
  outline: none;
  padding: 5px 0 5px 16px;
  color: white;
}

.button {
  background-color: white;
  border-radius: 0 5px 5px 0;
  border: 1px solid white;
  color: black;
  padding: 5px;
}
.button:hover {
  background-color: rgb(212, 212, 212);
}
</style>
