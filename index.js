// Constants
var KEY_ENTER = 13;
var KEY_ESC = 27;

// Get human-readable file size
function getReadableFileSize(fileSizeInBytes) {
  var i = -1;
  var byteUnits = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  do {
    fileSizeInBytes = fileSizeInBytes / 1024;
    i++;
  } while (fileSizeInBytes > 1024);
  return Math.max(fileSizeInBytes, 0.1).toFixed(1) + ' ' + byteUnits[i];
}

// Get file extension
function getExtension(fileName){
  return fileName.split('/').pop().split('.').pop();
}

// Simple email validation
function isEmail(email) {
  return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

// Encode html special chars
function htmlspecialchars(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Plural words ending
function s(n){
  if(n != 1) return 's';
}

// Get timezone offset/dst
function getTimezone(){
  var today = new Date();
  var jan = new Date(today.getFullYear(), 0, 1);
  var jul = new Date(today.getFullYear(), 6, 1);
  var dst = today.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

  var timezone = {
    timezone_offset: -(today.getTimezoneOffset()/60),
    timezone_dst: +dst
  };

  return timezone;
}
