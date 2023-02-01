function findKeyOrValue(keyOrValue, obj) {
  for (let value in obj) {
    if (
      obj[value].toLowerCase() === keyOrValue.toLowerCase() ||
      value === keyOrValue.toUpperCase()
    ) {
      return { [value]: obj[value] };
    }
  }
  return false;
}

export default findKeyOrValue;
