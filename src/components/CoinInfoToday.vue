<script setup>
import { onMounted, ref } from "vue";
import { ethereumStore } from "../stores/counter";

const bol = ref(false);
const store = ethereumStore();

onMounted(async () => {
  await store.getApi();
  return (bol.value = true);
});
</script>

<template v-if="bol">
  <div class="div_container">
    <h2>'NOME DA MOEDA'</h2>
    <h4>O Valor da 'MOEDA AQUI' hoje</h4>
    <h3 class="text" v-if="bol">
      R$ {{ store.myRequest[999].price.toFixed(2) }}
    </h3>
    <button class="text" @click="store.increment">MEU BOTAO</button>
  </div>
  <div class="div_picker">
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div>
</template>

<style scoped>
.text {
  color: purple;
  background-color: pink;
}
</style>
