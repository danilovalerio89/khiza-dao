<script setup>
import { ref, inject } from "vue";
import Datepicker from "vue3-datepicker";
import coinExists from "../utils/coinExists";
import { usePaginationStore } from "../stores/usePaginationStore";
import { useCoinStore } from "../stores/coinsStore";

const props = defineProps({
  coinsInApi: {},
  coinStore: {},
});
const pagination = usePaginationStore();

const coinTest = useCoinStore();

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

const handleInput = async () => {
  console.log(startDate.value);
  console.log(endDate.value);
  const verifyInputEmpty = newValue.value.length;
  if (verifyInputEmpty === 0) {
    return;
  }
  const coinsApi = props.coinsInApi.coinsExistsInAPI;
  const foundCoin = coinExists(newValue.value, coinsApi);
  if (foundCoin) {
    const coinObj = Object.keys(foundCoin)[0];
    newValue.value = "";
    await props.coinStore.getCoinTicker(coinObj);
    await props.coinStore.getCoinTrades(coinObj);
    pagination.initPagination(props.coinStore.fetchedTrades.allTransactions);
    await coinTest.getCoinTradesDate(coinObj, startDate.value, endDate.value);
    return (inputValue.coin = foundCoin);
  }
  return;
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
        <Datepicker
          v-model="endDate"
          :style="inputStyle"
          :inputFormat="inputFormat"
        />
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
