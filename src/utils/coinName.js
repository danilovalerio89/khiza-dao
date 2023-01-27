export function coinName(coinsData) {
  const coinsObj = {};

  const newString = coinsData.replace(/(\r\n|\n|\r)/gm, "-!-");

  const stringToArray = newString.split("-!-");
  for (let i = 0; i < newString.length; i++) {
    let key = stringToArray[i].split(":");

    coinsObj.value[key[0]] = key[1].replaceAll(/\s/g, "");
  }
  return coinsObj;
}
