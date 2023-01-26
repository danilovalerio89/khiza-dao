<script setup>
import CoinInfo from "./CoinInfoToday.vue";
import CoinSlide from "./CoinSlide.vue";
</script>

<template>
  <v-container class="container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <CoinSlide />
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Main input"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <CoinInfo />
  </v-container>
</template>

<style scoped>
.container {
  gap: 5rem;
}
</style>
