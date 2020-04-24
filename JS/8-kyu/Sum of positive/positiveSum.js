const myArray = [1,2,-5,10,-2]

const positiveSum = (arr) => {
  arr.reduce((total, value) => {
    return total + value;
  });
}

console.log(positiveSum(myArray))
