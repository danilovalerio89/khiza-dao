function verifyTypeTransaction(arrTransactions) {
  const buy = [];
  const sell = [];

  arrTransactions.map((item) =>
    item.type === "buy" ? buy.push(item) : sell.push(item)
  );

  console.log(buy);
  console.log(sell);
  return {
    buy,
    sell,
  };
}

export default verifyTypeTransaction;
