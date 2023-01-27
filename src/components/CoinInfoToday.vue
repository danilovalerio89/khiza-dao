<script setup>
import { onMounted, ref } from "vue";
import { useCoinTradeStore } from "../stores/coinsTradeStore";
import formatNumber from "../utils/formatValue";
import { useCoinsStore } from "../stores/coinNameStore";
import { coinsData } from "../data/coinData";

const coinsStore = useCoinsStore();
coinsStore.stringToObject(coinsData);

const bol = ref(false);
const store = useCoinTradeStore();

onMounted(async () => {
  await store.getApi("BTC");
  return (bol.value = true);
});
</script>

<template v-if="bol">
  <div class="div_container">
    <h2>'NOME DA MOEDA'</h2>
    <h4>O Valor da 'MOEDA AQUI' hoje</h4>
    <h3 class="text" v-if="bol">
      {{ formatNumber(store.myRequest[999].price) }}
    </h3>
  </div>
  <div class="div_picker">
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div>
</template>

<style scoped></style>
