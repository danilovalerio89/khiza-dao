<script setup>
import calcTransactions from "../utils/calcTransactions";
import currencyTransform from "../utils/currencyTransform";
import dateTransform from "../utils/dateTransform";
import { usePaginationStore } from "../stores/usePaginationStore";

const props = defineProps({
  store: {
    fetchedTrades: {},
  },
  trades: {},
});
const usePagination = usePaginationStore();

console.log(props.trades);

usePagination.initPagination(props.store.fetchedTrades.allTransactions);
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
        v-model="usePagination.pagination.page"
        :length="usePagination.pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @click="usePagination.updatePage(usePagination.pagination.page)"
      >
      </v-pagination>

      <v-card
        class="mt-4 mb-4 mx-auto"
        min-width="200"
        min-height="120"
        density="compact"
        v-for="(item, index) in usePagination.pagination.historyList"
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
        v-model="usePagination.pagination.page"
        :length="usePagination.pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @click="usePagination.updatePage(usePagination.pagination.page)"
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
