<script setup>
const items = [{ title: "About" }, { title: "Coins" }, { title: "Help" }];
</script>

<template>
  <v-app-bar flat floating app>
    <v-toolbar color="#212121" floating tag="div" class="w-100">
      <v-toolbar-title>
        <h2 class="title">BitForYou</h2>
      </v-toolbar-title>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn class="mx-2" fab dark color="white" v-bind="props">
            <v-icon size="x-large"> mdi-format-list-bulleted-square </v-icon>
          </v-btn>
        </template>

        <v-list theme="dark">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title class="cursor">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-app-bar>
</template>

<style>
.cursor {
  cursor: pointer;
}

.title {
  color: white;
}
</style>
