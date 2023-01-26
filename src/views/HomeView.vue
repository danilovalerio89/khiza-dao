<script setup>
import MainContent from "../components/MainContent.vue";
import CoinSlide from "../components/CoinSlideBar.vue";
import CoinInfoToday from "../components/CoinInfoToday.vue";
import DetailInfo from "../components/DetailInfo.vue";
</script>

<template>
  <MainContent>
    <template v-slot:coinSlide> <CoinSlide /></template>
    <template v-slot:CoinInfo></template>
  </MainContent>
  <CoinInfoToday />
  <DetailInfo />
</template>

<style></style>
