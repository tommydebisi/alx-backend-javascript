export default function cleanSet(set, startString) {
  if (!startString) { return ''; }

  const strArr = [];
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      strArr.push(elem.slice(startString.length));
    }
  }

  return strArr.join('-');
}
