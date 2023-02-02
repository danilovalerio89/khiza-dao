import { reactive } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";
import tickerTransform from "../utils/tickerTransform";

const useCoinStore = defineStore("coinStore", () => {
  const fetchedTicker = reactive({
    formattedTicker: {},
    isValid: Boolean,
  });

  const getCoinTicker = async (coin = "ETH") => {
    await api
      .get(`${coin}/ticker`)
      .then((response) => {
        fetchedTicker.formattedTicker = tickerTransform(response.data);
        fetchedTicker.isValid = true;
      })
      .catch((error) => console.log(error));
  };

  return { fetchedTicker, getCoinTicker };
});

export default useCoinStore;
