const numberList = "23 43 54 -34 0 9 10 77 32 -8"

const highAndLow = (numbers) => {
  const numberArray = numbers.split(' ').sort((a, b) => a - b);
  const first = numberArray[numberArray.length -1];
  const last = numberArray[0];
  return `${first} ${last}`;
}

console.log(highAndLow(numberList))
