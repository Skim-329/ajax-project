/* exported data */
var data = {
  view: 'landing-page',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var wines = localStorage.getItem('data');

if (wines !== null) {
  data = JSON.parse(wines);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
