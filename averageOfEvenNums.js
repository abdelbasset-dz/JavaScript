const numbers = [1, 5, 9, 10, 11, 42, 51];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

var averageOfEven = evenNumbers.reduce(function (prev, current) {
  return (prev + current) / evenNumbers.length ;
});

console.log(averageOfEven);
