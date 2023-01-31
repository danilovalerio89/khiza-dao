<script setup>
defineProps({
  store: {
    fetchedTicker: {},
    fetchedTrades: {},
  },
});
</script>

<template>
  <h2>Informações referente as últimas 24 horas</h2>
  <h1>Ethereum</h1>
  <v-row justify="center" align="center" class="my-1">
    <v-col cols="12">
      <div class="div_transactions">
        <span>Última</span>
        <p>{{ store.fetchedTicker.formattedTicker.last }}</p>
      </div>
    </v-col>
    <v-divider thickness="1"></v-divider>
    <v-col cols="12">
      <div class="div_transactions">
        <p>Menor</p>
        <p>{{ store.fetchedTicker.formattedTicker.low }}</p>
      </div>
    </v-col>
    <v-divider thickness="1"></v-divider>
    <v-col cols="12">
      <div class="div_transactions">
        <span>Maior</span>
        <p>{{ store.fetchedTicker.formattedTicker.high }}</p>
      </div>
    </v-col>
    <v-divider thickness="1"></v-divider>
    <v-col cols="12">
      <div class="div_transactions">
        <span>Volume</span>
        <p>
          ({{ store.fetchedTrades.coin }})
          {{ store.fetchedTicker.formattedTicker.volume }}
        </p>
      </div>
    </v-col>
    <v-divider thickness="1"></v-divider>
  </v-row>
</template>

<style scoped>
.div_transactions {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>
