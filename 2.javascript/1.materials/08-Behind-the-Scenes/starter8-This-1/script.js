'use strict';
const calAge = function (birthYear) {
    this.birthYear = birthYear;//Gan thuoc tinh birthYear cho undefined gay ra loi 
    console.log(this.birthYear);
}
// calAge(2003);//TypeError ? Why ? 
// const person = new calAge(2003);
// calAge(2003);