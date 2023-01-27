<script setup>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <v-app class="v-app__wrap">
    <v-app-bar app>
      <HeaderComp />
    </v-app-bar>

    <v-main class="v-main__wrap">
      <router-view />
    </v-main>

    <v-footer app>
      <FooterComp />
    </v-footer>
  </v-app>
</template>

<style>
.v-app__wrap {
  display: flex;
}
</style>
