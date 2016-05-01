/* Minimum */
function min (a, b) {
  if (a === b) {
    return undefined;
  }
  else if (a < b) {
    return a;
  }
  else {
    return b;
  }
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/* Recursion */
function isEven (integer) {
  return Math.abs(integer) % 2;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/* Bean counting */
function countBs (str) {
  return str.match(/B/g).length;
}
function countChar (str, char) {
  var findCharRgx = new RegExp(char, 'g');
  return str.match(findCharRgx).length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4