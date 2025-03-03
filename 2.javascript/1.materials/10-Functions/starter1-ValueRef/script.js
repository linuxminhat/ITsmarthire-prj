'use strict';
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 28102810,
};
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH000';
    passenger.name = 'Mr:' + passenger.name;
    if (passenger.passport === 28102810) {
        alert('Checked in !!!');
    } else {
        alert('Wrong Passport !!!');
    }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(jonas);
checkIn(flight, jonas);