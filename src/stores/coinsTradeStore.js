import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";

export const useCoinTradeStore = defineStore("counter", () => {
  const myRequest = ref();

  const getApi = async (coin = "ETH") => {
    await api
      .get(`${coin}/trades`)
      .then((response) => {
        return (myRequest.value = response.data);
      })
      .catch((error) => console.log(error));
  };

  return { getApi, myRequest };
});
