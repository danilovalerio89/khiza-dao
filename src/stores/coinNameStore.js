import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinNameStore = defineStore("coinsObjAPI", () => {
  const coinsExistsInAPI = ref({});

  const formatDataInObj = (coins) => {
    const coinObj = {};
    const stringFormatted = coins.replace(/(\r\n|\n|\r)/gm, "-!-");
    const stringToArray = stringFormatted.split("-!-");

    for (let i = 0; i < stringToArray.length; i++) {
      let key = stringToArray[i].split(":");

      coinObj[key[0].trim()] = key[1].trim();
    }

    coinsExistsInAPI.value = coinObj;

    return;
  };
  return { coinsExistsInAPI, formatDataInObj };
});
