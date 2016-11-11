//NOTE(adam): function that takes a list of strings and prints them, one per line, in a rectangular frame.

//For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
//   *********
//   * Hello *
//   * World *
//   * in    *
//   * a     *
//   * frame *
//   *********

const frame = (stringList) => {
  const longest = stringList.reduce((prev, cur) => (prev || '').length > cur.length ? prev : cur)
  const longestLength = longest.length
}

console.log('frame', frame(['Hello', 'World', 'in', 'a', 'frame']))
