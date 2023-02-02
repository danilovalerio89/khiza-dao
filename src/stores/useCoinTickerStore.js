import { reactive } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";
import tickerTransform from "../utils/tickerTransform";

const useCoinStore = defineStore("coinTickerStore", () => {
  const data = reactive({
    ticker: {},
    isValid: Boolean,
  });

  const getCoinTicker = async (coin = "ETH") => {
    await api
      .get(`${coin}/ticker`)
      .then((response) => {
        data.ticker = tickerTransform(response.data);
        data.isValid = true;
      })
      .catch((error) => {
        data.isValid = false;
        data.error = error;
      });
  };

  return { data, getCoinTicker };
});

export default useCoinStore;
