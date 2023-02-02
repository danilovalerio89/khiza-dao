<script setup>
import { onMounted, reactive, provide } from "vue";
import useCoinTickerStore from "../stores/useCoinTickerStore";
import useCoinTradeStore from "../stores/useCoinTradeStore";
import useCoinNameStore from "../stores/useVerifyCoin";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import SearchComp from "../components/SearchComp.vue";

const coinTickerStore = useCoinTickerStore();
const coinTradeStore = useCoinTradeStore();
const coinNameStore = useCoinNameStore();

const inputValue = reactive({
  coin: {},
});
provide("inputValue", inputValue);

onMounted(async () => {
  await coinTickerStore.getCoinTicker();
  await coinTradeStore.getCoinTrades();
  coinNameStore.coinExists(coinTradeStore.data.coin);

  // await coinStore.getCoinTicker();
  // await coinStore.getCoinTrades();
  // coinNameStoreOld.formatDataInObj(coinsData);
  // filterdCoin.found = coinExists(
  //   coinStore.fetchedTrades.coin,
  //   coinNameStoreOld.coinsExistsInAPI
  // );
});
</script>

<template>
  <v-row class="ma-0">
    <v-col align="center" justify="center" cols="12">
      <CoinInfosTicker
        :coinName="coinNameStore.coinName"
        :ticker="coinTickerStore.data.ticker"
      />
    </v-col>

    <v-col cols="12">
      <SearchComp :coinsInApi="coinNameStoreOld" :coinStore="coinStore" />
    </v-col>

    <v-col
      v-if="coinTradeStore.data.isValid"
      align="center"
      justify="center"
      cols="12"
    >
      <CoinInfosTrades :trades="coinTradeStore.data" />
    </v-col>
  </v-row>
</template>

<!-- v-if="coinStore.fetchedTrades.validData" -->
