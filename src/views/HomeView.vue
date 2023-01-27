<script setup>
// import MainContent from "../components/MainContent.vue";
import CoinInfoToday from "../components/CoinInfoToday.vue";
import DetailInfo from "../components/DetailInfo.vue";
import InputComp from "../components/InputComp.vue";
</script>

<template>
  <v-row class="ma-0">
    <v-col cols="12">
      <InputComp />
    </v-col>
    <CoinInfoToday />
  </v-row>
  <!-- <v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <InputComp />
      </v-col>
      <v-col cols="12">
        <CoinInfoToday />
      </v-col>
    </v-row>
  </v-row> -->

  <!-- <v-row>
    <v-col cols="6">
      <CoinInfoToday />
    </v-col>
    <v-col cols="6">
      <CoinInfoToday />
    </v-col>
    <v-col cols="6">
      <CoinInfoToday />
    </v-col>
    <v-col cols="6">
      <CoinInfoToday />
    </v-col>
  </v-row> -->

  <DetailInfo />
</template>

<style scoped>
.div {
  background-color: #1e1e1e;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<!-- <MainContent>
    <template v-slot:coinSlide> <CoinSlide /></template>
    <template v-slot:CoinInfo></template>
  </MainContent>
  <CoinInfoToday />
  <DetailInfo /> -->

<!-- <ButtonComp v-for="button in buttons" :key="button" :text="button" /> -->
