import { reactive } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";
import tickerTransform from "../utils/tickerTransform";
import verifyTypeTransaction from "../utils/verifyTypeTransaction";

export const useCoinTradeStore = defineStore("counter", () => {
  const fetchedTicker = reactive({
    formattedTicker: {},
    rawTicker: {},
    isValid: Boolean,
  });

  const fetchedTrades = reactive({
    allTransactions: [],
    buyTransactions: [],
    sellTransactions: [],
    coin: "",
    validData: false,
  });

  const getCoinTrades = async (coin = "ETH") => {
    await api
      .get(`${coin}/trades`)
      .then((response) => {
        fetchedTrades.allTransactions = response.data;
        fetchedTrades.validData = true;
        fetchedTrades.coin = coin;
        fetchedTrades.buyTransactions = verifyTypeTransaction(
          response.data
        ).buy;
        fetchedTrades.sellTransactions = verifyTypeTransaction(
          response.data
        ).sell;

        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const getCoinTicker = async (coin = "ETH") => {
    await api
      .get(`${coin}/ticker`)
      .then((response) => {
        fetchedTicker.formattedTicker = tickerTransform(response.data);
        fetchedTicker.rawTicker = response.data.ticker;
        fetchedTicker.isValid = true;
      })
      .catch((error) => console.log(error));
  };

  return { getCoinTrades, fetchedTrades, getCoinTicker, fetchedTicker };
});
