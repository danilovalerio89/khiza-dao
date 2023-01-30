<script setup>
import { onMounted, ref } from "vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";
import formatNumber from "../utils/formatValue";
import { useCoinsStore } from "../stores/coinNameStore";
import { coinsData } from "../data/coinData";

const store = useCoinTradeStore();
const validData = ref(false);
const lastTransactionValue = ref("");
const coinsStore = useCoinsStore();
const xxx = coinsStore.stringToObject(coinsData);

const findKeyOrValue = (keyOrValue, obj) => {
  for (let value in obj) {
    if (
      obj[value].toLowerCase() === keyOrValue.toLowerCase() ||
      value === keyOrValue.toUpperCase()
    ) {
      return value;
    }
  }
};

onMounted(async () => {
  await store.getApi();
  lastTransactionValue.value = formatNumber(store.myRequest[999].price);
  // console.log(store.fetchedData.coin);
  findKeyOrValue("ETH", xxx);
  return (validData.value = true);
});
</script>

<template v-if="validData">
  <v-divider thickness="2" class="my-12"></v-divider>
  <v-row justify="center" align="center">
    <v-col cols="7">
      <v-card
        title="Ethereum"
        subtitle="O valor ta última transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ lastTransactionValue }}
        </template>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card
        v-if="store.fetchedData.validData"
        title="Ethereum"
        subtitle="O maior valor de transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ formatNumber(store.fetchedData.maxValue) }}
        </template>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card
        v-if="store.fetchedData.validData"
        title="Ethereum"
        subtitle="O menor valor de transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ formatNumber(store.fetchedData.minValue) }}
        </template>
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-card
    title="Ethereum"
    subtitle="O valor ta última transação de Ethereum"
    variant="tonal"
  >
    <template v-slot:text>
      {{ lastTransactionValue }}
    </template>
  </v-card> -->

  <div class="div_picker">
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div>
  <v-divider thickness="2" class="mt-12"></v-divider>
</template>

<style scoped></style>
