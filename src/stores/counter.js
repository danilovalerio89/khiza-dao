import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from "../services/api";

export const ethereumStore = defineStore("counter", () => {
  const myRequest = ref();

  const request = reactive({
    isReady: false,
    items: [],
  });

  const getApi = async () => {
    await api
      .get(`ETH/trades`)
      .then((response) => {
        return (myRequest.value = response.data);
      })
      .catch((error) => console.log(error));
  };

  return { getApi, myRequest, request };
});
