<script setup>
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>

<template>
  <v-footer color="black">
    <v-row justify="space-evenly" no-gutters>
      <v-btn v-for="link in links" :key="link" class="my-2" variant="text">
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>BitForYou</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style></style>
