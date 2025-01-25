var booksListArray = [
  {
    title: "Guide Bordas",
    author: "Bordas",
    pages: 326
  },
  {
    title: "Hatchet",
    author: "Gary Paulsen",
    pages: 430
  },
  {
    title: "Last Dream",
    author: "A.Madani",
    pages: 162
  }
];

let MyPages = booksListArray.map(function (OBJ) {
  return OBJ.pages; // returns array of pages for each book
});

function averageNumOfPages(MyPages) {
  return MyPages.reduce((a, b) => a + b) / MyPages.length;
}

console.log(
  "The average number of pages across all the books is : " +
    averageNumOfPages(MyPages)
);

/*
//alternative one:
var averageNumOfPages =
  MyPages.reduce(function (prev, current) {
    return prev + current;
  }) / MyPages.length;
console.log(
  "The average number of pages across all the books is : " +
    averageNumOfPages(MyPages)
); 
*/
