<script setup>
import { onMounted } from "vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";

const store = useCoinTradeStore();

onMounted(async () => {
  await store.getCoinTicker();
  await store.getCoinTrades();
  return;
});
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
</template>

<style scoped></style>
