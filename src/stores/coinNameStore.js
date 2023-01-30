import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinsStore = defineStore("coins", () => {
  const coinsObj = ref({});

  const stringToObject = (coins) => {
    const newObj = {};
    const newString = coins.replace(/(\r\n|\n|\r)/gm, "-!-");
    const stringToArray = newString.split("-!-");

    for (let i = 0; i < stringToArray.length; i++) {
      let key = stringToArray[i].split(":");

      newObj[key[0].replace(/\s/g, "")] = key[1].replace(/\s/g, "");
    }

    coinsObj.value = newObj;

    return newObj;
    // return coinsObj;
  };
  return { coinsObj, stringToObject };
});
