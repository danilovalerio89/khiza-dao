<script setup>
import MenuList from "./MenuList.vue";
const items = [{ title: "About" }, { title: "Coins" }, { title: "Help" }];
</script>

<template>
  <v-app-bar app>
    <v-toolbar class="w-100" color="black">
      <v-toolbar-title>BitForYou</v-toolbar-title>

      <MenuList :item="items" />

      <v-row align="center" justify="end" class="hidden-xs mr-4 gap">
        <v-btn text v-for="item in items" :key="item.title">{{
          item.title
        }}</v-btn>
      </v-row>
    </v-toolbar>
  </v-app-bar>
</template>

<style scoped>
.gap {
  gap: 16px;
}
</style>
