const subjects1 = {"Hindi" : 60, "Greek" : 71, "Dutch" : 93}
const subjects2 = {"Java" : 10, "Ruby" : 80, "Python" : 65}
const subjects3 = {"C++" : 50, "ASM" : 10, "Haskell" : 20}

const myLanguages = results => {
  const objToArray = []
  for (let language in results) {
    objToArray.push([language, results[language]])
  }

  objToArray.sort((a,b) => b[1] > a[1] ? 1 : -1)

  const subList = []
  objToArray.forEach(array => {
    if (array[1] >= 60) {
       subList.push(array[0]);
    };

  })
  return subList
}

console.log(myLanguages(subjects1))
console.log(myLanguages(subjects2))
console.log(myLanguages(subjects3))
