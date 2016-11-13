//NOTE(adam): make a function that prints the next 20 leap years
const getNextLeap = (year) => {
  const next = year + (4 - parseInt(year % 4))
  return (next % 100 === 0 && next % 400 !== 0) ? next + 4 : next
}

//NOTE(adam): generator for next 'count' leap years, not considering current
function*  makeLeapGen(startYear, count) {
  //NOTE(adam): optional count argument default to 20
  count = count || 20

  let next = startYear  //NOTE(adam): cleanest implementation allows mutation
  let curCount = 0      //NOTE(adam): allow mutation for counter variable
  while(curCount++ < count) {
    //NOTE(adam): skip year if is multiple of 100
    yield next = getNextLeap(next)
  }
}

//NOTE(adam): use generator to return a list
const makeLeapList = (startYear, count) => [...makeLeapGen(startYear, count)]


console.log('[...makeLeapGen(1899)]', [...makeLeapGen(1899)])
console.log('[...makeLeapGen(1999)]', [...makeLeapGen(1999)])
console.log('[...makeLeapGen(2020, 5)]', [...makeLeapGen(2020, 5)])
console.log('makeLeapList(1940)', makeLeapList(1940))
