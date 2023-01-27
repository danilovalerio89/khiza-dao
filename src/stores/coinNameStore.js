import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinsStore = defineStore("coins", () => {
  const coinsObj = ref({});

  const stringToObject = (coins) => {
    const b = {};
    const newString = coins.replace(/(\r\n|\n|\r)/gm, "-!-");
    const stringToArray = newString.split("-!-");

    for (let i = 0; i < stringToArray.length; i++) {
      let key = stringToArray[i].split(":");

      b[key[0]] = key[1];
    }
    coinsObj.value = b;

    return;
    // return coinsObj;
  };
  return { coinsObj, stringToObject };
});
