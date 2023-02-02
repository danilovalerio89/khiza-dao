<script setup>
import { coinsData } from "../data/coinData";
import useCoinTickerStore from "../stores/useCoinTickerStore";
import { onMounted, reactive, provide } from "vue";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import SearchComp from "../components/SearchComp.vue";
import coinExists from "../utils/coinExists";
import { useCoinStore } from "../stores/coinsStore";
import { useCoinNameStore } from "../stores/coinNameStore";

const coinTickerStore = useCoinTickerStore();
const coinStore = useCoinStore();
const coinNameStore = useCoinNameStore();
const filterdCoin = reactive({
  found: {},
});
const inputValue = reactive({
  coin: {},
});
provide("inputValue", inputValue);

onMounted(async () => {
  await coinTickerStore.getCoinTicker();
  await coinStore.getCoinTicker();
  await coinStore.getCoinTrades();
  coinNameStore.formatDataInObj(coinsData);
  filterdCoin.found = coinExists(
    coinStore.fetchedTrades.coin,
    coinNameStore.coinsExistsInAPI
  );
});
</script>

<template>
  <v-row class="ma-0">
    <v-col
      align="center"
      justify="center"
      v-if="coinStore.fetchedTicker.isValid"
      cols="12"
    >
      <CoinInfosTicker
        :coinName="filterdCoin.found"
        :ticker="coinTickerStore.data.ticker"
      />
    </v-col>
    <v-col cols="12">
      <SearchComp :coinsInApi="coinNameStore" :coinStore="coinStore" />
    </v-col>
    <v-col
      align="center"
      justify="center"
      cols="12"
      v-if="coinStore.fetchedTrades.validData"
    >
      <CoinInfosTrades :store="coinStore" />
    </v-col>
  </v-row>
</template>
