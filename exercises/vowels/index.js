// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0
  for( let elem of str){
    let capital = elem.toUpperCase()
    if(capital === 'A' || capital === 'E' || capital === 'I' || capital === 'O' || capital === 'U'){
      counter ++
    }
  }
  return counter  
}

module.exports = vowels;
