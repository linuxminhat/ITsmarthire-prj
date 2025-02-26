const myWifeInformation = {
    firstName: 'Nguyen',
    lastName: 'Ngoc',
    birthYear: 2003,
    calculatingAge: function () {
        console.log('Her age is' + 2025 - this.birthYear);
    },
};
const changeNameWhenMarry = function (wifeName, husbandName) {
    wifeName.firstName = husbandName;
};
const marriedWife = changeNameWhenMarry(myWifeInformation, 'Dang');
console.log(myWifeInformation);