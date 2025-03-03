'use strict';
const formatting = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperCaseWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
};
const transformed = function (str, fn) {
    console.log(`The input string is : ${str}`);
    console.log(`The transformed function is : ${fn.name}`);
    console.log(`The output is : ${fn(str)}`);
};
transformed('Java best language', formatting);
transformed('Java best language', upperCaseWord);
