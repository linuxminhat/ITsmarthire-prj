'use strict';
let gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1.
const gameEventsSet = new Set();
for (let value of gameEvents.values()) {
  gameEventsSet.add(value);
}
console.log(gameEventsSet);
//2.
for (let key of gameEvents.keys()) {
  if (key === 64) {
    console.log('Unfair !!!');
    gameEvents.delete(key);
  }
}
console.log(gameEvents);
//3
console.log(gameEvents.keys())
let matchMinute;
for (matchMinute of gameEvents.keys()) {
  if (matchMinute <= 45) {
    let time = 'FIRST HALF';
    console.log(`${time} : ${matchMinute} : ${gameEvents.get(matchMinute)}`);
  } else {
    if (matchMinute >= 45) {
      let time = 'SECOND HALF';
      console.log(`${time} : ${matchMinute} : ${gameEvents.get(matchMinute)}`);
    }
  }
}