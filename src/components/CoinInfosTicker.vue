<script setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
const props = defineProps({
  store: {
    fetchedTicker: {},
    fetchedTrades: {},
  },
  coinName: {},
});
const { name } = useDisplay();
const divClass = computed(() => {
  return "d-flex flex-wrap justify-space-between";
});
const changeCol = computed(() => {
  switch (name.value) {
    case "xs":
      return "12";
    case "sm":
      return "12";
    case "md":
      return "9";
    case "lg":
      return "9";
    case "xl":
      return "9";
    case "xxl":
      return "7";
  }
  return { changeCol };
});

const prevName = ref("");

const coin = () => {
  if (props.coinName) {
    prevName.value = Object.values(props.coinName)[0];
    return Object.values(props.coinName)[0];
  }
  return prevName.value;
};
</script>

<template>
  <v-container>
    <h2 class="text-h5">Informações referente as últimas 24 horas</h2>
    <h1 class="text-uppercase text-h3 font-weight-black my-6">
      {{ coin() }}
    </h1>
    <v-row justify="center" align="center">
      <v-col :cols="changeCol">
        <div :class="divClass">
          <p class="text-subtitle-1">Última</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.last }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col :cols="changeCol">
        <div :class="divClass">
          <p class="text-subtitle-1">Menor</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.low }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col :cols="changeCol">
        <div :class="divClass">
          <p class="text-subtitle-1">Maior</p>
          <p class="text-subtitle-1 font-weight-medium">
            {{ store.fetchedTicker.formattedTicker.high }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
      <v-col :cols="changeCol">
        <div :class="divClass">
          <p class="text-subtitle-1">Volume</p>
          <p class="text-subtitle-1 font-weight-medium">
            ({{ store.fetchedTrades.coin }})
            {{ store.fetchedTicker.formattedTicker.volume }}
          </p>
          <v-divider thickness="1"></v-divider>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
