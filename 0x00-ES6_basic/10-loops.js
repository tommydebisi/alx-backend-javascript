export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const [idx, value] of array.entries()) {
    arr[idx] = appendString + value;
  }

  return arr;
}
