<script setup>
import MeuHeader from "./components/HeaderComp.vue";
</script>

<template>
  <v-app class="v-app__wrap">
    <MeuHeader />
    <v-main class="v-main__wrap">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.v-app__wrap {
  display: flex;
}
</style>
