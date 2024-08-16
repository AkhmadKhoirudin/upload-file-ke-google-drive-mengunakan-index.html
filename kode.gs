function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function uploadFile(data, fileName) {
  var folder = DriveApp.getFolderById('11BYoSgJJLZBizzuA6W3gpqwym_d3n8-U');
  var contentType = data.substring(5, data.indexOf(';'));
  var bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,') + 7));
  var blob = Utilities.newBlob(bytes, contentType, fileName);
  var file = folder.createFile(blob);
  return 'File ' + fileName + ' berhasil diunggah!';
}
