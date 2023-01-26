<script setup>
import FooterComp from "./components/FooterComp.vue";
import MeuHeader from "./components/HeaderComp.vue";
</script>

<template>
  <v-app class="v-app__wrap">
    <MeuHeader />
    <v-main class="v-main__wrap">
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<style>
.v-app__wrap {
  display: flex;
}
</style>
