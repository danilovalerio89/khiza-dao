<script setup></script>

<template>
  <v-sheet class="mx-auto" max-width="1000">
    <v-slide-group multiple show-arrows class="container">
      <v-slide-item v-for="n in 25" :key="n">
        <v-btn
          class="mx-2"
          active-class="purple white--text"
          depressed
          rounded
          dark
        >
          Options {{ n }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped>
.container {
  background-color: #4e4e4e;
}
</style>
