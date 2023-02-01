function coinExists(keyOrValue, obj) {
  for (let value in obj) {
    if (
      value.toLocaleLowerCase() === keyOrValue.toString().toLocaleLowerCase() ||
      obj[value].toLocaleLowerCase() ===
        keyOrValue.toString().toLocaleLowerCase()
    ) {
      return { [value]: obj[value] };
    }
  }
  return false;
}

export default coinExists;
