function dateTransform(number) {
  const dateToString = number.toString() + "000";

  const newDate = new Date(parseInt(dateToString)).toLocaleString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return newDate;
}

export default dateTransform;
