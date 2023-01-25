<script setup>
const items = [
  { title: "Botão 1" },
  { title: "Botão 2" },
  { title: "Botão 3" },
];
</script>

<template>
  <div>
    <v-toolbar color="black">
      <v-toolbar-title>
        <h2 class="font-weight-bold" color="white">BitForYou</h2>
      </v-toolbar-title>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn class="mx-2" fab dark color="white" v-bind="props">
            <v-icon dark size="x-large">
              mdi-format-list-bulleted-square
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title class="cursor">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<style>
.cursor {
  cursor: pointer;
}
</style>
