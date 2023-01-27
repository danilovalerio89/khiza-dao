<script setup>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <v-layout class="wrap">
    <HeaderComp />
    <v-main>
      <router-view />
    </v-main>
    <FooterComp />
  </v-layout>
</template>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  widows: 100%;
}
</style>
