import { ref } from "vue";
import { defineStore } from "pinia";
import { coinsData } from "../data/coinData";

const useCoinNameStore = defineStore("coinName", () => {
  const coinName = ref({});

  const formatDataInObj = (coins) => {
    const coinObj = {};
    const stringFormatted = coins.replace(/(\r\n|\n|\r)/gm, "-!-");
    const stringToArray = stringFormatted.split("-!-");

    for (let i = 0; i < stringToArray.length; i++) {
      let key = stringToArray[i].split(":");

      coinObj[key[0].trim()] = key[1].trim();
    }

    return coinObj;
  };

  const coinExists = (keyOrValue, data = coinsData) => {
    const obj = formatDataInObj(data);

    for (let value in obj) {
      if (
        value.toLocaleLowerCase() ===
          keyOrValue.toString().toLocaleLowerCase() ||
        obj[value].toLocaleLowerCase() ===
          keyOrValue.toString().toLocaleLowerCase()
      ) {
        coinName.value = { [value]: obj[value] };
      }
    }
    return false;
  };

  return { coinName, coinExists };
});

export default useCoinNameStore;
