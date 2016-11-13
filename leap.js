//NOTE(adam): make a function that prints the next 20 leap years

//NOTE(adam): get leap year following argument
const getNextLeap = (year) => {
  const next = year + (4 - parseInt(year % 4))
  return (next % 100 === 0 && next % 400 !== 0) ? next + 4 : next
}

//NOTE(adam): generator for next 'count' leap years, not considering current
const makeLeapList = (startYear, count) => {
  //NOTE(adam): optional count argument default to 20
  count = count || 20

  //NOTE(adam): create list with first leap year
  const list = [getNextLeap(startYear)]

  //NOTE(adam): append list with leap years until reaches count elements
  while(list.length < count) {
    const last = list[list.length - 1]
    list.push(getNextLeap(last))
  }

  return list
}


console.log('makeLeapList(1899)', makeLeapList(1899))
console.log('makeLeapList(1999)', makeLeapList(1999))
console.log('makeLeapList(2020, 5)', makeLeapList(2020, 5))
console.log('makeLeapList(1940)', makeLeapList(1940))
