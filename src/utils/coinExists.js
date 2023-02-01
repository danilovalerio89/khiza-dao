function coinExists(keyOrValue, obj) {
  for (let value in obj) {
    console.log(keyOrValue);
    if (
      value.toLocaleLowerCase() === keyOrValue.toString().toLocaleLowerCase()
    ) {
      return { [value]: obj[value] };
    }
  }
  return false;
}

export default coinExists;
