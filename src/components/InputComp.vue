<script setup>
// import { ethereumStore } from "../stores/counter";
// import api from "../services/api";

// const getEth = ethereumStore();
// console.log(getEth.ticker);

// const date = new Date(1674787039000).toLocaleString("pt-BR", {
//   year: "numeric",
//   month: "numeric",
//   day: "numeric",
// });

// const date2 = new Date("01/01/2023 00:00:01");
// const date3 = date2.getTime();
// console.log(date);
// console.log(date2);
// console.log("Date hoje", date3);

// console.log("Api", "1674844687");

// 1359318745
// 1357005600000
// const date4 = new Date(1641006000000).toLocaleString("pt-BR", {
//   year: "numeric",
//   month: "numeric",
//   day: "numeric",
// });

// console.log(date4);
</script>

<template>
  <v-container align="center" justify="center" class="justTest">
    <input placeholder="meu input" class="input" />
    <button class="button" @click="getEth.getEthereum">Procurar</button>
  </v-container>
</template>

<style scoped>
.input {
  border: 1px solid red;
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
