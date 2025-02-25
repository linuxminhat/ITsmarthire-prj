let jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 29,
}
const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before:', jessica);
console.log('After:', marriedJessica);
jessica = { childrens: 2 };