<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";
// import calcTransactions from "../utils/calcTransactions";

const store = useCoinTradeStore();
const reversedRender = reactive({
  buyTransactions: [],
  sellTransactionsReverse: {},
  allTransactionsReverse: {},
});
const configPagination = reactive({
  page: 1,
  pageSize: 4,
  list: [
    "Danilo1",
    "Danilo2",
    "Danilo3",
    "Danilo4",
    "Danilo5",
    "Danilo6",
    "Danilo7",
    "Danilo8",
  ],
  listCount: 0,
  historyList: [],
  initPage: () => {
    configPagination.listCount = configPagination.list.length;
    if (configPagination.listCount < configPagination.pageSize) {
      configPagination.historyList = configPagination.list;
    } else {
      configPagination.historyList = configPagination.list.slice(
        0,
        configPagination.pageSize
      );
    }
  },
  updatePage: (pageIndex) => {
    let start = (pageIndex - 1) * configPagination.pageSize;
    let end = pageIndex * configPagination.pageSize;

    configPagination.historyList = configPagination.list.slice(start, end);
    configPagination.page = pageIndex;
  },
  pages: computed(() => {
    if (configPagination.pageSize == null || configPagination.listCount == null)
      return 0;
    return Math.ceil(configPagination.listCount / configPagination.pageSize);
  }),
});

onMounted(async () => {
  await store.getCoinTicker();
  await store.getCoinTrades();
  const reversedBuyCopy = [...store.fetchedTrades.buyTransactions];
  const reversedSellCopy = [...store.fetchedTrades.sellTransactions];
  const reversedAllCopy = [...store.fetchedTrades.allTransactions];
  reversedRender.buyTransactions = reversedBuyCopy.reverse();
  reversedRender.sellTransactionsReverse = reversedSellCopy.reverse();
  reversedRender.allTransactionsReverse = reversedAllCopy.reverse();

  configPagination.initPage();
  // console.log(configPagination.)
});
</script>

<template>
  <v-divider thickness="2" class="my-12"></v-divider>
  <!-- <h1>Ultimas 24 horas</h1> -->
  <!-- <v-row
    v-if="store.fetchedTicker.isValid"
    justify="center"
    align="center"
    class="my-4"
  >
    <v-col cols="7">
      <v-card
        title="Ethereum"
        subtitle="O valor ta última transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ store.fetchedTicker.formattedTicker.last }}
        </template>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card
        title="Ethereum"
        subtitle="O maior valor de transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ store.fetchedTicker.formattedTicker.high }}
        </template>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card
        title="Ethereum"
        subtitle="O menor valor de transação de Ethereum"
        variant="tonal"
      >
        <template v-slot:text>
          {{ store.fetchedTicker.formattedTicker.low }}
        </template>
      </v-card>
    </v-col>
  </v-row> -->

  <!-- <div>
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div> -->
  <v-divider thickness="2" class="mt-12"></v-divider>

  <!-- <div v-if="store.fetchedTrades.validData">
    <h3>Trade Type Buy</h3>
    <p>
      Total Comprado:
      {{ calcTransactions(store.fetchedTrades.buyTransactions) }}
    </p>
    <p>
      Valor Vendido:
      {{ calcTransactions(store.fetchedTrades.sellTransactions) }}
    </p>
    <p>Total de trades: {{ store.fetchedTrades.allTransactions.length }}</p>
  </div> -->
  <v-divider thickness="2" class="my-12"></v-divider>

  <div class="text-center">
    <v-card
      class="mt-4 mb-4 mx-auto"
      max-width="200"
      v-for="(item, index) in configPagination.historyList"
      :key="index"
    >
      <v-card-text class="text--primary">
        <div>{{ item }}</div>
      </v-card-text>
    </v-card>

    <v-pagination
      v-model="configPagination.page"
      :length="configPagination.pages"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @click="configPagination.updatePage(configPagination.page)"
    >
    </v-pagination>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  width: 100%;
}
</style>
