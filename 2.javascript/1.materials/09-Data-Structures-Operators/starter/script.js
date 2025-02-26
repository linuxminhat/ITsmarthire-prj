'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);

  }

  // // ES6 enhanced object literals
  // openingHours,

  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  // orderPasta(ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  // orderPizza(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
};
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables 
let a = 111;
let b = 222;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);

restaurant.orderDelivery({
  time: '22:22',
  address: '35 Dang Dung, Phuong Hoa Khanh Bac, Da Nang',
})













