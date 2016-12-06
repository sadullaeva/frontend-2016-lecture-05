$(document).ready(function () {
  $.ajax({
    url: "./mockapi/getAllArticles.json"
  }).done(function() {
    console.log('done')
  });
});
