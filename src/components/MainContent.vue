<script setup></script>

<template>
  <v-container class="container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <slot name="coinSlide"></slot>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Main input" hide-details="auto"></v-text-field>
      </v-col>
    </v-row>
    <slot name="CoinInfo"></slot>
  </v-container>
</template>

<style scoped>
.container {
  gap: 5rem;
}
</style>
