//NOTE(adam): a function that translates a text to Pig Latin and back.
//English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
//“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

const changeWords = (string, changeFunc) => {
  const stringList = string.toLowerCase().split(' ')
  const changedList = stringList.map(changeFunc)
  const changedString = changedList.join(' ')
  return changedString.slice(0, 1).toUpperCase() + changedString.slice(1)
}

const toPigLatin = (string) => changeWords(string, (str) => str.slice(1) + str.slice(0, 1) + 'ay')
const fromPigLatin = (string) => changeWords(string, (pig) => pig.slice(-3, -2) + pig.slice(0, -3))

console.log('The quick brown fox -->', toPigLatin('The quick brown fox'))
console.log('Hetay uickqay rownbay oxfay -->', fromPigLatin('Hetay uickqay rownbay oxfay'))
