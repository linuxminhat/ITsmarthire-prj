//Hoc ve toan tu dac biet
//?. : trick de tra : question mark dot
//?? : trick de tra : question mark question
//Hoc ve Optional Chaining 
const myInformation = {
    name: 'Dang Nhat Minh',
    age: 28,
    uni: {
        name: 'DUT',
        degree: 'Engineer',
        GPA: 3.42,
    }
}
console.log(myInformation);
console.log(myInformation?.uni?.name);