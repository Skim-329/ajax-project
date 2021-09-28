var accessForm = document.querySelector('#main-form');
var $views = document.querySelectorAll('.view');
var $favs = document.querySelector('.favs');
var $about = document.querySelector('.about');
var $logo = document.querySelector('.logo');
var $addtofavs = document.querySelector('.addtofav');
var $home = document.querySelector('.homepagebtn');
var $home2 = document.querySelector('.homepagebtn2');
var $home3 = document.querySelector('.homepagebtn3');

function getWine(event) {
  event.preventDefault();
  var winerec = document.querySelector('#winerec');
  var wineImage = document.querySelector('#wine-image');

  var xhr = new XMLHttpRequest();
  var url = 'https://api.spoonacular.com/food/wine/pairing';
  var delimiter = '&';
  var foodParam = 'food=' + accessForm.elements.food.value;
  var maxPriceParam = 'maxPrice=' + accessForm.elements.price.value;
  var apiKey = 'apiKey=813583d5fed0439d9bc095ff4b5c0ac4';
  var requestPath = url + '?' + foodParam + delimiter + maxPriceParam + delimiter + apiKey;

  xhr.open('GET', requestPath);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.response.pairingText !== '') {
      var newEl = document.createElement('h3');
      var newText = document.createTextNode(xhr.response.pairingText);
      newEl.appendChild(newText);
      winerec.appendChild(newEl);
      var newImage = document.createElement('img');
      var imageUrl = xhr.response.productMatches[0].imageUrl;
      newImage.setAttribute('src', imageUrl);
      wineImage.appendChild(newImage);
    } else {
      var newBadEl = document.createElement('h3');
      var newBadText = document.createTextNode('No matches were found. Please try again.');
      newBadEl.appendChild(newBadText);
      winerec.appendChild(newBadEl);
    }
  });
  xhr.send();
  viewRecs(event);
}
accessForm.addEventListener('submit', getWine);

function viewPage(pageName) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === pageName) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'view hidden';
    }
  }
}

function viewRecs(event) {
  viewPage('rec-page');
}

function viewFavs(event) {
  viewPage('favorite-page');
}
$favs.addEventListener('click', viewFavs);

function viewAbout(event) {
  viewPage('about-page');
}
$about.addEventListener('click', viewAbout);

function viewLandingPage(event) {
  viewPage('landing-page');
}
$logo.addEventListener('click', viewLandingPage);
$addtofavs.addEventListener('click', viewFavs);
$home.addEventListener('click', viewLandingPage);
$home2.addEventListener('click', viewLandingPage);
$home3.addEventListener('click', viewLandingPage);
