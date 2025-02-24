'use strict';
const jonas = {
    name: 'Jonas',
    year: 1989,
    age: 2025 - this.year,
    sayMyAge: function () {
        console.log(this.age);
    },
    calcAge: function () {
        console.log(2037 - this.year);
    }
};
jonas.sayMyAge();
jonas.calcAge();