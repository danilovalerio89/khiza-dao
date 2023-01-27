<script setup>
import MenuList from "./MenuList.vue";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const items = [{ title: "About" }, { title: "Coins" }, { title: "Help" }];

const { name } = useDisplay();

const changeStyle = computed(() => {
  return name.value === "xs" ? "w-100 pa-0" : "w-100 pa-4";
});
</script>

<template>
  <v-toolbar :class="changeStyle" color="black">
    <v-toolbar-title class="myColor">BitForYou</v-toolbar-title>

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
