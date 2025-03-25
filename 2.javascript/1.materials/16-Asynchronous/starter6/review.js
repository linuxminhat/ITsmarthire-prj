'use strict';
const getCountryAndNeighbour = function (country) {
    //AJAX call country 1 
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        //Render country 1 
        renderCountry(data);
        //Get neighbour country 
        const [neighbour] = data.borders;
        if (!neighbour) return;
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        request2.send();
        
    })
}