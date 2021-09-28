/* exported data */
var data = {
  view: 'landing-page',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var journals = localStorage.getItem('data');

if (journals !== null) {
  data = JSON.parse(journals);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
