const currencyTransform = (number) => {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export default currencyTransform;
