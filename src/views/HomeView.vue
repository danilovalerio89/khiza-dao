<script setup>
import { onMounted } from "vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import DetailInfo from "../components/DetailInfo.vue";
import InputComp from "../components/InputComp.vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";

const store = useCoinTradeStore();
onMounted(async () => {
  await store.getCoinTicker();
  await store.getCoinTrades();
});
</script>

<template>
  <v-row class="ma-0">
    <v-col cols="12">
      <InputComp />
    </v-col>
    <v-col
      align="center"
      justify="center"
      v-if="store.fetchedTicker.isValid"
      cols="12"
    >
      <CoinInfosTicker :store="store" />
    </v-col>
    <v-col
      align="center"
      justify="center"
      v-if="store.fetchedTicker.isValid"
      cols="12"
    >
      <CoinInfosTrades :store="store" />
    </v-col>
  </v-row>

  <DetailInfo />
</template>

<style scoped></style>
