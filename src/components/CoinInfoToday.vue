<script setup>
import { onMounted, ref, reactive } from "vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";
import calcTransactions from "../utils/calcTransactions";

const store = useCoinTradeStore();
const reversedRender = reactive({
  buyTransactions: [],
  sellTransactionsReverse: {},
  allTransactionsReverse: {},
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
  console.log(store.fetchedTrades.buyTransactions);
  console.log(reversedRender.buyTransactions);
});

const tab = ref();
</script>

<template>
  <v-divider thickness="2" class="my-12"></v-divider>
  <h1>Ultimas 24 horas</h1>
  <v-row
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
  </v-row>

  <div>
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div>
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
  <v-card>
    <v-tabs v-model="tab" bg-color="primary" align-tabs="center" grow>
      <v-tab value="one">Buy Trades</v-tab>
      <v-tab value="two">Sell Trades</v-tab>
      <v-tab value="three">Total Trades</v-tab>
    </v-tabs>

    <v-card-text v-if="store.fetchedTrades.validData">
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-expansion-panels>
            <v-expansion-panel-title> Aaaa</v-expansion-panel-title>
            <v-expansion-panel>
              <template v-slot:title>
                <p>{{ store.fetchedTrades.allTransactions[999].date }}</p>
                <v-spacer></v-spacer>
                {{ store.fetchedTicker.formattedTicker.last }}
              </template>
              <template v-slot:text>
                {{ store.fetchedTicker.formattedTicker.last }}
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.flex {
  display: flex;
  width: 100%;
}
</style>
