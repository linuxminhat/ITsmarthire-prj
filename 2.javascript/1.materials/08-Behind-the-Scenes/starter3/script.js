'use strict'
function calcAge(birthYear) {
    const age = 2025 - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh,and you are a millenial, ${firstName}`;
            console.log(str);
        }
        // console.log(str); //Cant => Block scope 
    }
    printAge();
    return age;

}
const firstName = 'Dang';
caclAge(2003);