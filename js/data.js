/* exported data */
var data = {
  entries: []
};

var wines = localStorage.getItem('favino');

if (wines !== null) {
  data = JSON.parse(wines);
}

var $favsHeart = document.querySelector('.addtofav');

$favsHeart.addEventListener('click', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('favino', dataJSON);
});
