'use strict'
const jonas = {
    year: 2003,
    calcAge: function () {
        console.log(this); //Tham chieu den chinh doi tuong Jonas
    },
};
jonas.calcAge();//goi ham => tham chieu den chinh doi tuong jonas 
calcAge();