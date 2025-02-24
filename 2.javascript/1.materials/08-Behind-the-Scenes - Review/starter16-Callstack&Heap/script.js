const myInformation = {
    userName: 'Dang Nhat Minh',
    birthYear: 2003,
    nowYear: 2025,
    universityName: 'DUT',
    schoolHistoryLearning: {
        primarySchool: 'Ngo Si Lien',
        secondarySchool: 'Luong The Vinh',
        highSchool: 'Le Quy Don',
    },
    calculatingAge: function () {
        const myAge = this.nowYear - this.birthYear;
        console.log(myAge);
    }
};

const myFriendInformation = myInformation;
myFriendInformation.userName = 'Nguyen Duc Chung';
const myGirlFriendInformation = { ...myInformation };
myGirlFriendInformation.userName = 'Nguyen Tran Bao Ngoc';
console.log(myGirlFriendInformation);

// Sử dụng JSON.parse(JSON.stringify()) để tạo deep copy
let myNewFriendInformation = JSON.parse(JSON.stringify(myInformation));  // Using JSON method
myNewFriendInformation.userName = 'Nguyen Duc Chung';
myNewFriendInformation.schoolHistoryLearning.primarySchool = 'New School';

console.log(myNewFriendInformation);  // This should work correctly now
