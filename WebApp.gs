function getIncidents(){
  var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1AMbEglG18BDz4-mQgTfAl4-jiT2Th_tKyIjwBEMDWF8/edit#gid=0");
  var sheet = spreadsheet.getSheets()[0];
  var range = sheet.getRange(1, 1, 1000, 10);
  var values = range.getValues();
  return values;
}

function doGet(e){

}