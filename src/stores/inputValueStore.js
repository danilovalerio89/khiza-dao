import { reactive } from "vue";
import { defineStore } from "pinia";

export const useInputValueStore = defineStore("counter", () => {
  const inputValue = reactive({
    value: String,
  });

  const saveInput = async (value) => {
    return (inputValue.value = value);
  };

  return { inputValue, saveInput };
});
