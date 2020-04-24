// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

const myArray = [1,2,-5,10,-2]

const positiveSum = (arr) => {
  const myNewArray = []

arr.forEach(number => {

  if (number >= 0) {
    return myNewArray.push(number);
  };
});

 return myNewArray.reduce((total, value) => {
     return total + value;
  });
}

console.log(positiveSum(myArray))


// for (let positiveNum in arr) {
//   if (positiveNum >= 0) {
//     myNewArray.push(positiveNum)
//   }
//   console.log(myNewArray)
// }
