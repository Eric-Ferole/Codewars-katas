const array = [1,2,3,4,5];

const sum = array => {
  return array.reduce((a, b) => a + b, 0)
}

console.log(sum(array))
