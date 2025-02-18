'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('show-modal');
const openModal = function () {
    console.log('Button Clicked !!!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key == 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
        console.log('Esc was pressed !!!!');
    }
})