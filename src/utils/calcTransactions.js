import currencyTransform from "../utils/currencyTransform";

function calcTransactions(arrTransactions, formatCurrency = true) {
  if (formatCurrency) {
    return currencyTransform(arrTransactions.reduce((a, b) => a + b.price, 0));
  }

  return arrTransactions.reduce((a, b) => a + b.price, 0);
}

export default calcTransactions;
