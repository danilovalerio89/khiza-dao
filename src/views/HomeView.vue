<script setup>
import { onMounted, computed } from "vue";
import useCoinTickerStore from "../stores/useCoinTickerStore";
import useCoinTradeStore from "../stores/useCoinTradeStore";
import useCoinNameStore from "../stores/useVerifyCoin";
import CoinInfosTicker from "../components/CoinInfosTicker.vue";
import CoinInfosTrades from "../components/CoinInfosTrades.vue";
import SearchComp from "../components/SearchComp.vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();
const displayList = computed(() => {
  switch (name.value) {
    case "xs":
      return "d-none";
    case "sm":
      return;
    case "md":
      return;
    case "lg":
      return;
    case "xl":
      return;
    case "xxl":
      return;
  }
  return { name };
});

const coinTickerStore = useCoinTickerStore();
const coinTradeStore = useCoinTradeStore();
const coinNameStore = useCoinNameStore();

onMounted(async () => {
  await coinTickerStore.getCoinTicker();
  await coinTradeStore.getCoinTrades();
  coinNameStore.coinExists(coinTradeStore.data.coin);
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

    <v-col cols="12" :class="displayList">
      <SearchComp
        :ticker="coinTickerStore"
        :trades="coinTradeStore"
        :coinName="coinNameStore"
      />
    </v-col>

    <v-col
      v-if="coinTradeStore.data.isValid"
      align="center"
      justify="center"
      cols="12"
      :class="displayList"
    >
      <CoinInfosTrades :trades="coinTradeStore.data" />
    </v-col>
  </v-row>
</template>
