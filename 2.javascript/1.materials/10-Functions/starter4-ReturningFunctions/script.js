'use strict';
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumb, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNumb}`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNumb}`, name })
    },
};
lufthansa.book(2810, 'Dang');
lufthansa.book(635, 'Jonas');
console.log(lufthansa);
const euroWings = {
    name: 'EuroWings',
    iataCode: 'EW',
    bookings: [],

}
const swiss = {
    name: 'SwissWings',
    iataCode: 'SW',
    bookings: [],
}
const book = lufthansa.book;
book.call(euroWings, 23, 'Sarah');//Chi co function moi goi duoc call apply hay bind

lufthansa.planes = 2810; //default setting 
lufthansa.buyPlanes = function () {
    console.log(this);
    this.planes++;
    console.log(`Our planes now is + ${this.planes}`);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);