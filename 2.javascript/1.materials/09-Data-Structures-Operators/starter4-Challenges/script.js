'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const bayernMunichArray = [...game.players[0]];
console.log(bayernMunichArray);
const brossiaDortmundArray = [...game.players[1]];
console.log(brossiaDortmundArray);
//2.
const [gk1, ...fieldPlayers1] = bayernMunichArray;
const [gk2, ...fieldPlayers2] = brossiaDortmundArray;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);
//3.
const allPlayers = [...bayernMunichArray, ...brossiaDortmundArray];
console.log(allPlayers);
//4.
const players1Final = ['Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5.
const team1 = game.odds[0];
const team2 = game.odds[1];
const team3 = game.odds[2];

//6
const printGoals = function () {
  console.log(...game.scored);
}
