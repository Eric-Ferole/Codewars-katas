// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript

myArray = [1,2,3,4,5]

const getMinMax = (arr) => {
  const min = (Math.min(...arr))
  const max = (Math.max(...arr))
  return [min, max]
};

const getMinMax = arr => [Math.min(...arr), Math.max(...arr)]


console.log(getMinMax(myArray))
