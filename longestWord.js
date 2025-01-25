// The longest word in an array .. using reduce() array method

function findLongestWord(arr) {
  var longestWord = arr.reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

const arr = ["once", "straight", "investigation", "upon"];

const myArr = findLongestWord(arr);
console.log(myArr);
