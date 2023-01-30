<script setup>
import CoinInfoToday from "../components/CoinInfoToday.vue";
import DetailInfo from "../components/DetailInfo.vue";
import InputComp from "../components/InputComp.vue";
</script>

<template>
  <v-row class="ma-0">
    <v-col cols="12">
      <InputComp />
    </v-col>
    <v-col align="center" justify="center">
      <CoinInfoToday />
    </v-col>
  </v-row>

  <DetailInfo />
</template>

<style scoped></style>
