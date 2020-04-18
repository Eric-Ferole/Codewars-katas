const nom = 'éric férole'

const abbrevName = name => {
  return name.split(' ').map(word =>  word.charAt(0)).join('.').toUpperCase();
}

console.log(abbrevName(nom));
