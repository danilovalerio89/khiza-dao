<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <v-btn variant="text" color="white"> {{ text }}</v-btn>
</template>
