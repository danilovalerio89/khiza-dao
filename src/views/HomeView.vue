<script setup>
import { onMounted, reactive } from "vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import InputComp from "../components/InputComp.vue";
import { coinsData } from "../data/coinData";
import findKeyOrValue from "../utils/findKeyOrValueCoinData";
import { useCoinTradeStore } from "../stores/coinsTradeStore";
import { useCoinNameStore } from "../stores/coinNameStore";

const store = useCoinTradeStore();
const coinName = useCoinNameStore();
const coin = reactive({
  found: {},
});

onMounted(async () => {
  await store.getCoinTicker();
  await store.getCoinTrades();
  coinName.stringToObject(coinsData);
  coin.found = findKeyOrValue(store.fetchedTrades.coin, coinName.coinsObj);
});
</script>

<template>
  <v-row class="ma-0">
    <v-col
      align="center"
      justify="center"
      v-if="store.fetchedTicker.isValid"
      cols="12"
    >
      <CoinInfosTicker :store="store" :coinName="coin.found" />
    </v-col>
    <v-col cols="12">
      <InputComp />
    </v-col>
    <v-col
      align="center"
      justify="center"
      cols="12"
      v-if="store.fetchedTrades.validData"
    >
      <CoinInfosTrades
        :store="store"
        :transactions="store.fetchedTrades.allTransactions"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
