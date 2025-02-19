// 'use strict';
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName); //Dang 
    // console.log(lastName);
    function printAge() {
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);// You are 34, born in 2003
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenialValuable = true;
            const firstName = 'Steven';
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);
            function addTwoNumber(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        addTwoNumber(2, 3);
        console.log('HERE ');
        // console.log(addTwoNumber(2, 3));
    }
    // printAge();
    return age;
}
const firstName = 'Dang';
calcAge(2003);
console.log(calcAge(2003));
// console.log(age);//Khong the truy cap duoc 
//printAge() : CANT 
