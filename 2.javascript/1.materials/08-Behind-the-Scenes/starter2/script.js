'use strict'
function calcAge(birthYear) {
    const age = 2025 - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);
        }
        //Cant : console.log(str);
    }
    printAge();
    return age;
}
const firstName = 'Dang';
calcAge(2003);
