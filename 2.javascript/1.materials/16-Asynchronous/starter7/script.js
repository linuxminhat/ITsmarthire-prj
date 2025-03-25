'use strict';
//learn using fetch 
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/{name}');
request.send();
