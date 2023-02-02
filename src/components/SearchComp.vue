<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import Datepicker from "vue3-datepicker";

import { usePaginationStore } from "../stores/usePaginationStore";
const { name } = useDisplay();
const pagination = usePaginationStore();

const props = defineProps({
  trades: {},
  ticker: {},
  coinName: {},
});

const inputStyle = ref({
  display: "flex",
  border: "2px solid white",
  width: "100px",
  "border-radius": "5px",
  padding: "8px",
  margin: "15px auto",
});

const changeCol = computed(() => {
  switch (name.value) {
    case "xs":
      return "12";
    case "sm":
      return "6";
    case "md":
      return "6";
    case "lg":
      return "3";
    case "xl":
      return "3";
    case "xxl":
      return "3";
  }
  return { changeCol };
});
const inputFormat = ref("dd-MM-yyyy");
const startDate = ref(new Date());
const endDate = ref(new Date());

const inputValue = ref("");
const errorDate = ref("");

const handleInput = async (value) => {
  const verifyInputEmpty = value.length;
  const coinExists = props.coinName.coinExists(value);

  if (verifyInputEmpty === 0 || !coinExists) {
    return;
  }
  const [key] = Object.entries(coinExists)[0];
  const dateStart = startDate.value.setHours(0, 0, 0, 0);
  const dateEnd = endDate.value.setHours(23, 59, 59, 59);
  if (dateStart > dateEnd) {
    errorDate.value = "Data inicial maior que data final.";
    setTimeout(() => {
      errorDate.value = "";
    }, 2500);
    return;
  }
  if (dateStart !== new Date().setHours(0, 0, 0, 0)) {
    await props.ticker.getCoinTicker(key);
    await props.trades.getCoinTradesDate(key, dateStart, dateEnd);
    pagination.initPagination(props.trades.data.allTransactions);
    return (inputValue.value = "");
  }
  await props.ticker.getCoinTicker(key);
  await props.trades.getCoinTrades(key);
  pagination.initPagination(props.trades.data.allTransactions);
  return (inputValue.value = "");
};
</script>

<template>
  <v-container align="center" justify="center">
    <h2>Procurar outra moeda</h2>
    <input
      placeholder="Ex: Bitcoin/BTC"
      class="input"
      v-model="inputValue"
      @change="(event) => (inputValue = event.target.value)"
    />
    <button class="button" @click="handleInput(inputValue)">Procurar</button>
    <div class="div_error">
      <span v-if="errorDate.length > 0"> {{ errorDate }}</span>
    </div>
  </v-container>

  <v-container class="mt-4 mb-4 mx-auto container">
    <v-row align="center" justify="center" class="w-100">
      <v-col :cols="changeCol">
        <p class="text-center text-left">
          De: {{ startDate.toLocaleDateString("pt-BR") }}
        </p>
        <Datepicker
          v-model="startDate"
          :style="inputStyle"
          :inputFormat="inputFormat"
        />
      </v-col>

      <v-col :cols="changeCol">
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
.div_error {
  height: 25px;
  color: red;
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
  background-color: grey;
}

@media (max-width: 360px) {
  .input,
  .button {
    width: 100%;
    border-radius: 5px;
  }
}
@media (min-width: 760px) {
  .input {
    width: 350px;
  }
}
@media (min-width: 1400px) {
  .container {
    width: 1200px;
  }
}
</style>
