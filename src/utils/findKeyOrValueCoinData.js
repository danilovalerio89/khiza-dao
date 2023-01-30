function findKeyOrValue(keyOrValue, obj) {
  for (let value in obj) {
    if (
      obj[value].toLowerCase() === keyOrValue.toLowerCase() ||
      value === keyOrValue.toUpperCase()
    ) {
      return value;
    } else {
      return "Coin not found.";
    }
  }
}

export default findKeyOrValue;
