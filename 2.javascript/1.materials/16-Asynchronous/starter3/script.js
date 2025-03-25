'use strict';
const img = document.querySelector('.dog');
img.src = ' dog.jpg';
img.addEventListener('load', function () {
    img.classList.add('fadeIn');
});
p.style.width = '300px';