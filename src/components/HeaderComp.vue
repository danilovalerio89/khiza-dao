<script setup>
import MenuList from "./MenuList.vue";
const items = [{ title: "About" }, { title: "Coins" }, { title: "Help" }];
</script>

<template>
  <v-app-bar flat floating app>
    <v-toolbar color="#212121" floating tag="div" class="w-100">
      <v-toolbar-title>
        <h2 class="title">BitForYou</h2>
      </v-toolbar-title>
      <MenuList :item="items" />
      <v-row align="center" justify="end" class="hidden-xs mr-4 gap">
        <v-btn text color="white" v-for="item in items" :key="item.title">{{
          item.title
        }}</v-btn>
      </v-row>
    </v-toolbar>
  </v-app-bar>
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
