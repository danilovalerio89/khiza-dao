import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";

export const useCoinTradeStore = defineStore("counter", () => {
  const myRequest = ref();

  const fetchedData = reactive({
    allTransactions: {},
    maxValue: Number,
    minValue: Number,
    coin: "",
    validData: false,
  });

  const getApi = async (coin = "ETH") => {
    await api
      .get(`${coin}/trades`)
      .then((response) => {
        myRequest.value = response.data;
        fetchedData.allTransactions = response.data;
        fetchedData.validData = true;
        fetchedData.coin = coin;
        fetchedData.maxValue = Math.max(
          ...response.data.map((item) => item.price)
        );
        fetchedData.minValue = Math.min(
          ...response.data.map((item) => item.price)
        );

        return response.data;
      })
      .catch((error) => console.log(error));
  };

  return { getApi, myRequest, fetchedData };
});
