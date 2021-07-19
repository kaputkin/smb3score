$(document).ready(pullData);

function pullData() {

// ID of the Google Spreadsheet
 var spreadsheetID = "1D9D84Z82-zcNyve3nTuJKaIvC6uu5zYVhg2qchYLxZU";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/cells/" + spreadsheetID + "/1/public/basic?range=B1:B2&alt=json";

$.getJSON(url, function(data) {
  
  var entry1 = data.feed.entry[0].content.$t;
  var entry2 = data.feed.entry[1].content.$t;

  $("#pullDataAri").html(entry1 )
  $("#pullDataJoanna").html(entry2 )
})
}
