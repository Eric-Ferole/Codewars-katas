let x = '45385593107843568'

const fakeBin = (x) => {
  return x.split('').map(num => num <= 4 ? '0' : '1').join('')
}

console.log(fakeBin(x))