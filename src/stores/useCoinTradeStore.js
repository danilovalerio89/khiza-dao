import api from "../services/api";
import { reactive } from "vue";
import { defineStore } from "pinia";
import verifyTypeTransaction from "../utils/verifyTypeTransaction";

const useCoinTradeStore = defineStore("coinTradeStore", () => {
  const data = reactive({
    allTransactions: [],
    buyTransactions: [],
    sellTransactions: [],
    coin: "",
    isValid: false,
  });

  const getCoinTrades = async (coin = "ETH") => {
    await api
      .get(`${coin}/trades`)
      .then((response) => {
        data.allTransactions = response.data;
        data.isValid = true;
        data.coin = coin;
        data.buyTransactions = verifyTypeTransaction(response.data).buy;
        data.sellTransactions = verifyTypeTransaction(response.data).sell;

        return response.data;
      })
      .catch((error) => {
        data.isValid = false;
        data.error = error;
      });
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
      .then((response) => {
        data.allTransactions = response.data;
        data.validData = true;
        data.coin = coin;
        data.buyTransactions = verifyTypeTransaction(response.data).buy;
        data.sellTransactions = verifyTypeTransaction(response.data).sell;
      })
      .catch((error) => {
        data.isValid = false;
        data.error = error;
      });
  };

  return {
    data,
    getCoinTrades,
    getCoinTradesDate,
  };
});

export default useCoinTradeStore;
