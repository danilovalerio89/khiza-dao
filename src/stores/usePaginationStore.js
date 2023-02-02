import { computed, reactive } from "vue";
import { defineStore } from "pinia";

export const usePaginationStore = defineStore("pagination", () => {
  const pagination = reactive({
    page: 1,
    pageSize: 25,
    list: [],
    listCount: 0,
    historyList: [],
  });

  const reverseArr = (arrayTransactions) => {
    const copyArr = [...arrayTransactions];
    const newArr = copyArr.reverse();
    return newArr;
  };

  const initPagination = (arrayTransactions) => {
    pagination.listCount = arrayTransactions.length;

    if (pagination.listCount < pagination.pageSize) {
      pagination.historyList = reverseArr(arrayTransactions);
    } else {
      pagination.historyList = reverseArr(
        arrayTransactions.slice(0, pagination.pageSize)
      );
    }

    pagination.list = reverseArr(arrayTransactions);
  };

  const updatePage = (pageIndex) => {
    let start = (pageIndex - 1) * pagination.pageSize;
    let end = pageIndex * pagination.pageSize;
    pagination.historyList = pagination.list.slice(start, end);
    pagination.page = pageIndex;
  };

  const pages = computed(() => {
    if (pagination.pageSize == null || pagination.listCount == null) {
      return 0;
    }
    return Math.ceil(pagination.listCount / pagination.pageSize);
  });

  return { pagination, initPagination, updatePage, pages };
});
