<script setup>
import { computed, reactive } from "vue";
import calcTransactions from "../utils/calcTransactions";

defineProps({
  store: {
    fetchedTicker: {},
    fetchedTrades: {},
  },
});

const configPagination = reactive({
  page: 1,
  pageSize: 20,
  list: [
    "Danilo1",
    "Danilo2",
    "Danilo3",
    "Danilo4",
    "Danilo5",
    "Danilo6",
    "Danilo7",
    "Danilo8",
    "Danilo9",
    "Danilo21",
    "Danilo31",
    "Danilo41",
    "Danilo51",
    "Danilo61",
    "Danilo71",
    "Danilo81",
    "Danilo11",
    "Danilo21",
    "Danilo31",
    "Danilo41",
    "Danilo51",
    "Danilo61",
    "Danilo71",
    "Danilo81",
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

configPagination.initPage();
</script>

<template>
  <v-divider thickness="2" class="mt-12"></v-divider>

  <div v-if="store.fetchedTrades.validData">
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
  </div>
  <v-divider thickness="2" class="my-12"></v-divider>

  <div class="text-center">
    <v-pagination
      v-model="configPagination.page"
      :length="configPagination.pages"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @click="configPagination.updatePage(configPagination.page)"
    >
    </v-pagination>
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
