'use strict'

//NOTE(adam): generator for next 'count' leap years, not considering current
function*  makeLeapGen(startYear, count) {
  //NOTE(adam): optional count argument default to 20
  count = count || 20

  //NOTE(adam): get next leap year
  const nextLeap = startYear + (4 - parseInt(startYear % 4))

  let next = nextLeap   //NOTE(adam): cleanest implementation allows mutation
  let curCount = 0      //NOTE(adam): allow mutation for counter variable
  while(curCount++ < count) {
    //NOTE(adam): skip year if is multiple of 100
    yield (next % 400 === 0 || next % 100 !== 0) ? next : next += 4

    //NOTE(adam): move to next possible year
    next += 4
  }
}

const makeLeapList = (startYear, count) => [...makeLeapGen(startYear, count)]

console.log('[...makeLeapGen(1899)]', [...makeLeapGen(1899)])
console.log('[...makeLeapGen(1999)]', [...makeLeapGen(1999)])
console.log('[...makeLeapGen(2020, 5)]', [...makeLeapGen(2020, 5)])

console.log('makeLeapList(1940)', makeLeapList(1940))
