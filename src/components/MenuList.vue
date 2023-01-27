<script setup>
defineProps({
  item: {
    title: String,
  },
  listCoinRender: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn
        v-if="listCoinRender == false"
        class="mx-2 hidden-sm-and-up"
        fab
        dark
        color="white"
        v-bind="props"
      >
        <v-icon size="x-large"> mdi-format-list-bulleted-square </v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="item in item" :key="item.title">
        <v-list-item-title class="cursor">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
