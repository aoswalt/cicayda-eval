//NOTE(adam): function that takes a list of strings and prints them, one per line, in a rectangular frame.

//For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
//   *********
//   * Hello *
//   * World *
//   * in    *
//   * a     *
//   * frame *
//   *********

const frame = (stringList, frameChar) => {
  frameChar = frameChar || '*'

  const longestString = stringList.reduce((prev, cur) => (prev || '').length > cur.length ? prev : cur)
  const longestLength = longestString.length

  const cap = frameChar.repeat(2) + frameChar.repeat(longestLength) + frameChar.repeat(2)
  const bodyList = stringList.map(str => frameChar + ' ' + str + ' '.repeat(longestLength - str.length) + ' ' + frameChar)

  const resultList = [cap].concat(bodyList).concat([cap])
  return resultList.join('\n')
}

console.log(frame(['Hello', 'World', 'in', 'a', 'frame']))
console.log('\n')
console.log(frame(['A', 'different', 'set', 'of', 'words', 'to', 'frame']))
console.log('\n')
console.log(frame(['Another', 'set', 'of', 'words', 'with', 'a', 'different', 'frame'], '#'))
