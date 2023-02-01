<script setup>
import { coinsData } from "../data/coinData";
import { onMounted, reactive, provide } from "vue";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import SearchComp from "../components/SearchComp.vue";
import coinExists from "../utils/coinExists";
import { useCoinStore } from "../stores/coinsStore";
import { useCoinNameStore } from "../stores/coinNameStore";

const coinStore = useCoinStore();
const coinNameStore = useCoinNameStore();
const filterdCoin = reactive({
  found: {},
});
const inputValue = reactive({
  coin: {},
});

onMounted(async () => {
  await coinStore.getCoinTicker();
  await coinStore.getCoinTrades();
  coinNameStore.formatDataInObj(coinsData);
  filterdCoin.found = coinExists(
    coinStore.fetchedTrades.coin,
    coinNameStore.coinsExistsInAPI
  );
});
provide("inputValue", inputValue);
//////////////////////////////////////////////
</script>

<template>
  <v-row class="ma-0">
    <v-col
      align="center"
      justify="center"
      v-if="coinStore.fetchedTicker.isValid"
      cols="12"
    >
      <CoinInfosTicker :coinStore="coinStore" :coinName="filterdCoin.found" />
    </v-col>
    <v-col cols="12">
      <SearchComp :coinsInApi="coinNameStore" />
    </v-col>
    <v-col
      align="center"
      justify="center"
      cols="12"
      v-if="coinStore.fetchedTrades.validData"
    >
      <CoinInfosTrades
        :store="coinStore"
        :transactions="coinStore.fetchedTrades.allTransactions"
      />
    </v-col>
  </v-row>
</template>
