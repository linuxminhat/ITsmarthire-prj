// 'use strict';
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// //////////////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// // request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(this.responseText);
//     const html = `
//     <article class = "country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;

// });
'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//data khong can khai bao truoc vi no la tham so cua ham
const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
    `;


  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
const getCountryAndNeighbour = function (country) {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  //////////////////////////////
  const request = new XMLHttpRequest();
  //Gửi request đến API restcountries.com để lấy thông tin về một quốc gia.
  //Hiển thị thông tin quốc gia đó ra trang web dưới dạng HTML.
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);//Goi lai ham ben tren 
    //render ra quoc gia ben canh
    const [neighbourdata] = data.borders;
    //Nho phai goi AJAX lan 2 
    if (!neightbourdata) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/name/${neighbourdata}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    })
  });


};
getCountryAndNeighbour('portugal');

setTimeout() => {

}