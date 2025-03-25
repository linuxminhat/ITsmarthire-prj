'use strict';
let f;
const g = function () {
    const a = 28;
    f = function () {
        console.log(a + a);
    };
};
const h = function () {
    const a = 30;
    f = function () {
        console.log(a + a);
    };
};
g();
f();
h();
f();