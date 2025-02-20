'use strict';
const personalInformation = {
    myName: 'Dang Nhat Minh',
    myAge: 2025 - 2003,
    myUni: 'DUT',
    showMyUni: function () {
        console.log(this.myUni);
    }
}

personalInformation.showMyUni();
const lionelMessi = {
    nickName: 'El Pulga',
    age: 2025 - 1987,
    bestClub: 'Barcelona',
    showHisAge: function () {
        console.log(this.age);
    }
}

lionelMessi.showHisAge();
// 'use strict';
// console.log(this);//Tham chieu den doi tuong window
// //-----
// var a = 2810;
// console.log(this.a);//In ra 10 vi a la thuoc tinh cua window
// var b = 59;
// console.log(this.b);//In ra 59 vi b la thuoc tinh cua window
// var c = 19;
// console.log(this.c);
// var d = 284;
// console.log(this.d);
// var e = 91;
// console.log(this.e);
// //-----
// function show() {
//     console.log(this);
// }
// show();
// //-----
// const person = {
//     name: 'Dang Nhat Minh',
//     showName: function () {
//         console.log(this.name);
//     }
// }
// person.showName();
// //
// const person1 = {
//     name: 'Huynh Thao Linh',
//     age: 2025 - 2003,
//     showAge: function () {
//         console.log(this.age);
//     }
// }
// person1.showAge();