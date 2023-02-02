import { reactive } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";
import tickerTransform from "../utils/tickerTransform";
import verifyTypeTransaction from "../utils/verifyTypeTransaction";

export const useCoinStore = defineStore("coinStore", () => {
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

  const getCoinTradesDate = async (
    coin = "ETH",
    startDate = new Date(),
    endDate = new Date()
  ) => {
    let start = startDate.setHours(0, 0, 0, 0);
    let end = Date.parse(endDate);

    let startToString = start.toString().slice(0, -3);
    let endToString = end.toString().slice(0, -3);

    await api
      .get(`${coin}/trades/${startToString}/${endToString}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return {
    getCoinTrades,
    fetchedTrades,
    getCoinTicker,
    fetchedTicker,
    getCoinTradesDate,
  };
});
