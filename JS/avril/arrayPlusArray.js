array1 = [1,2,3]
array2 = [4,5,6]

const arrayPlusArray = (arr1, arr2) => {
  const reducer = (acc, val) => acc + val;
  const sum1 = arr1.reduce(reducer)
  const sum2 = arr2.reduce(reducer)
  return sum1 + sum2
}

console.log(arrayPlusArray(array1, array2))
