function zipStrings(strA, strB) {
  let count = 0;
  let result = "";

  if (strA.length > strB.length) {
    count = strA.length;
  } else {
    count = strB.length;
  }

  for (let i = 0; i < count; i++) {
    if (i >= strA.length) {
      // wenn i größer gleich, die länge von a ist.
      result += strB[i]; // ich will nur noch das in b ausgeben, weil in a nichts vorhanden
    } else if (i >= strB.length) {
      result += strA[i];
    } else {
      result += strA[i] + strB[i];
    }
  }
  return result;
}
