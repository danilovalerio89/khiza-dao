<script setup>
defineProps({
  store: {
    fetchedTicker: {},
    fetchedTrades: {},
  },
});
</script>

<template>
  <v-container>
    <h2 class="text-h5">Informações referente as últimas 24 horas</h2>
    <h1 class="text-uppercase text-h3 font-weight-black my-6">Ethereum</h1>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-space-between w-75">
          <p class="text-subtitle-1">Última</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.last }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-space-between w-75">
          <p class="text-subtitle-1">Menor</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.low }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-space-between w-75">
          <p class="text-subtitle-1">Maior</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.high }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-space-between w-75">
          <p class="text-subtitle-1">Volume</p>
          <p class="text-subtitle-1 font-weight-medium">
            ({{ store.fetchedTrades.coin }})
            {{ store.fetchedTicker.formattedTicker.volume }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <!-- <v-divider thickness="1"></v-divider> -->
    </v-row>
  </v-container>
</template>

<style scoped>
.div_transactions {
  /* width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
}
</style>
