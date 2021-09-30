/* exported data */
var data = {
  entries: []
};

var wines = localStorage.getItem('data');

if (wines !== null) {
  data = JSON.parse(wines);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
