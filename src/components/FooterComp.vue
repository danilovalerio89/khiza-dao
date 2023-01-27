<script setup>
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>

<template>
  <v-row justify="center" no-gutters>
    <v-btn v-for="link in links" :key="link" class="my-2" variant="text">
      {{ link }}
    </v-btn>
    <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-row>
</template>
