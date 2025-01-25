const arr = [
  "geeks",
  "for",
  "learn",
  "can",
  "be",
  "computer",
  "science",
  "zoom",
  "geeks",
  "fire",
  "be",
  "data"
];

const count = (arr) => {
    return [...arr].reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        return obj;
    }, {});
};


console.log(count(arr));


