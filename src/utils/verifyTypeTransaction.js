function verifyTypeTransaction(arrTransactions) {
  const buy = [];
  const sell = [];

  arrTransactions.map((item) =>
    item.type === "buy" ? buy.push(item) : sell.push(item)
  );

  return {
    buy,
    sell,
  };
}

export default verifyTypeTransaction;
