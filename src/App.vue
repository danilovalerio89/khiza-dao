<script setup>
import MeuHeader from "./components/HeaderComp.vue";
</script>

<template>
  <v-app>
    <v-main>
      <MeuHeader msg="nova msg aqui" />
      <router-view />
    </v-main>
  </v-app>
</template>
