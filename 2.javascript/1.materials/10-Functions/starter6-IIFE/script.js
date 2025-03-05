'use strict';
const normalFunctionI = function () {
    console.log("This is normal function I ");
}
function normalFunctionII() {
    console.log("This is normal function II ");
}
const normalFunctionIII = () => {
    console.log("This is normal function III");
}
(function () {
    console.log("This is IIFE !!!");
})();
