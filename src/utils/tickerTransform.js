import currencyTransform from "./currencyTransform";

export function tickerTransform(data) {
  const date = data.ticker.date;
  const formattedDate = parseInt(date.toString().padEnd(3, 0));
  const newDate = new Date(formattedDate).toLocaleDateString("pt-BR");

  const newObj = {
    high: currencyTransform(parseInt(data.ticker.high)),
    low: currencyTransform(parseInt(data.ticker.low)),
    volume: data.ticker.vol,
    last: currencyTransform(parseInt(data.ticker.last)),
    buy: currencyTransform(parseInt(data.ticker.buy)),
    sell: currencyTransform(parseInt(data.ticker.sell)),
    date: newDate,
  };

  return newObj;
}
