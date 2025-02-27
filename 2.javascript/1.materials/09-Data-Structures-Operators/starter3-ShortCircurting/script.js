'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // Khai báo ngoài

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  weekdays: weekdays,
  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // ES6 enhanced object literals
  // openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};
//Spread Array 
const newArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArray);
const newSpreadArray = [...newArray, 9, 10, 11, 12];
console.log(newSpreadArray);
//Rest Array
const [a, b, c, ...newRestArray] = newArray;
console.log(a, b, c, newRestArray);

const [pizza, , risotto, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, other);

//Functions 
const sumOfInfinitive = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  };
  console.log(sum);
};
sumOfInfinitive(1, 2, 3);





// const newArray = [1, 2, 3];
// const badNewArray = [newArray[0], newArray[1], newArray[2], 4, 5, 6];
// console.log(badNewArray);
// const goodNewArray = [...newArray, 4, 5, 6];
// console.log(goodNewArray);
// console.log(...goodNewArray);
// console.log(1, 2, 3, 4, 5, 6);
// const newMainMenu = ['Chicken Plus', ...restaurant.mainMenu];
// console.log(newMainMenu);
// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 arrays 
// const joinMainMenu = [...newMainMenu, ...mainMenuCopy];
// console.log(joinMainMenu);

// //Iterable
// const str = 'Nguyen Tran Bao Ngoc';
// for (let i of str) {
//   console.log(i);
// }

// const ingredients = [
//   prompt("Let making pasta !!! Ingredient1 ?"),
//   prompt("Ingredient2 ?"),
//   prompt("Ingredient3"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
