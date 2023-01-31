<script setup>
import { computed, onMounted, reactive } from "vue";
import calcTransactions from "../utils/calcTransactions";
import currencyTransform from "../utils/currencyTransform";
import dateTransform from "../utils/dateTransform";

const props = defineProps({
  store: {
    fetchedTicker: {},
    fetchedTrades: {},
  },
  transactions: {},
});
onMounted(() => {
  configPagination.initPage();
});

const reverseArr = (arrObj) => {
  const copyArr = [...arrObj];
  const newArr = copyArr.reverse();
  return newArr;
};

const configPagination = reactive({
  page: 1,
  pageSize: 25,
  list: reverseArr(props.transactions),
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
</script>

<template>
  <div>
    <h2>
      Valor referente as ultimas
      {{ store.fetchedTrades.allTransactions.length }} transações
    </h2>
    <h3>
      Valor Total Comprado:
      {{ calcTransactions(store.fetchedTrades.buyTransactions) }}
    </h3>
    <h3>
      Valor Total Vendido:
      {{ calcTransactions(store.fetchedTrades.sellTransactions) }}
    </h3>
  </div>

  <v-container class="mt-4 mb-4 mx-auto">
    <v-row align="center" justify="center" class="w-100">
      <v-pagination
        class="w-100"
        v-model="configPagination.page"
        :length="configPagination.pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @click="configPagination.updatePage(configPagination.page)"
      >
      </v-pagination>

      <v-card
        class="mt-4 mb-4 mx-auto"
        min-width="200"
        min-height="120"
        density="compact"
        v-for="(item, index) in configPagination.historyList"
        :key="index"
      >
        <v-col>
          <v-card-text class="text--primary display_paragraphs">
            <p>Data: <v-spacer></v-spacer>{{ dateTransform(item.date) }}</p>
            <p>Tid: <v-spacer></v-spacer> {{ item.tid }}</p>
            <p>Quant: <v-spacer></v-spacer>{{ item.amount }}</p>
            <p class="text-capitalize">
              Tipo: <v-spacer></v-spacer>{{ item.type }}
            </p>
            <p>
              Preço: <v-spacer></v-spacer
              >{{ currencyTransform(parseInt(item.price)) }}
            </p>
            <p>
              Pago: <v-spacer></v-spacer
              >{{ currencyTransform(item.price * item.amount) }}
            </p>
          </v-card-text>
        </v-col>
      </v-card>

      <v-pagination
        class="w-100"
        v-model="configPagination.page"
        :length="configPagination.pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @click="configPagination.updatePage(configPagination.page)"
      >
      </v-pagination>
    </v-row>
  </v-container>
</template>

<style scoped>
.display_paragraphs > p {
  display: flex;
}
</style>
