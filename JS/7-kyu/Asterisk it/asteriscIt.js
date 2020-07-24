const string1 = '53122708';
const weirdString = '1NaN4NaN6*4NaN6*8NaN67NaN23NaN1';

const asteriscIt = (n) => {
const cleanedArray = n.toString().replace(/\D/g, '')
  const arrayOfDigits = Array.from(String(cleanedArray), Number)
   const NewArrayOfDigits = arrayOfDigits.map((number, index) => {
    if (number%2 === 0 && arrayOfDigits[index-1]%2 === 0) {
        return `*${number}`;
    }
    return number
  });
  return NewArrayOfDigits.join('');
};

console.log(asteriscIt(weirdString));
