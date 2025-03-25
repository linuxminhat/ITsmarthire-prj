// 'use strict';
// const p = document.querySelector('.p');
// p.textContent = 'My name is Mih';
// alert('Text set');
// p.style.color = 'red';
'use strict';
const p = document.querySelector('.p');
setTimeout(function () {
    p.textContent = 'My name is Minh';
}, 5000);
p.style.color = 'red';