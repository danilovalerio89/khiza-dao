<script setup>
import MenuList from "./MenuList.vue";
const items = [{ title: "About" }, { title: "Coins" }, { title: "Help" }];
</script>

<template>
  <v-toolbar class="w-100" flat color="black">
    <v-toolbar-title class="myColor">BitForYou</v-toolbar-title>
    <v-spacer></v-spacer>
    <MenuList :item="items" />
    <v-row align="center" justify="end" class="hidden-xs mr-4 gap">
      <v-btn text v-for="item in items" :key="item.title">{{
        item.title
      }}</v-btn>
    </v-row>
  </v-toolbar>
</template>

<style scoped>
.cursor {
  cursor: pointer;
}
.title {
  color: white;
}

.gap {
  gap: 16px;
}
</style>
