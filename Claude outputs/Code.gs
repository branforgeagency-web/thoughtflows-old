// ThoughtFlows Enquiry Logger — Google Apps Script
//
// SETUP:
// 1. Go to https://sheets.google.com and create a new blank spreadsheet
//    (name it e.g. "ThoughtFlows Enquiries").
// 2. In the sheet, open Extensions > Apps Script.
// 3. Delete the placeholder code and paste this entire file in.
// 4. Change ACCESS_TOKEN below to a long random string (e.g. generate one
//    at https://www.uuidgenerator.net/ ) - keep it secret, it's the only
//    thing stopping random people from writing to or reading your sheet.
// 5. Click Deploy > New deployment > select type "Web app".
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Click Deploy, authorize it with your Google account, and copy the
//    "Web app URL" it gives you.
// 7. Paste that URL, and the same ACCESS_TOKEN, into
//    src/config/sheetConfig.js in the website project.
// 8. Whenever you edit this script, you must create a NEW deployment (or
//    "Manage deployments" > edit > New version) for changes to go live.

var SHEET_NAME = "Enquiries";
var ACCESS_TOKEN = "PASTE_A_LONG_RANDOM_TOKEN_HERE";

var COLUMNS = [
  "Timestamp",
  "Source",
  "Name",
  "Email",
  "Phone",
  "Course",
  "Location",
  "Age",
  "Qualification",
  "Message",
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Called by the website whenever someone submits the Contact form or the
// Register popup - appends one row per enquiry.
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.token !== ACCESS_TOKEN) {
      return jsonOut_({ ok: false, error: "Invalid token" });
    }
    var sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      data.source || "",
      data.name || "",
      data.email || "",
      data.phone || "",
      data.course || "",
      data.location || "",
      data.age || "",
      data.qualification || "",
      data.message || "",
    ]);
    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
}

// Called by the website's /admin page to read all enquiries back out.
function doGet(e) {
  var token = e.parameter.token;
  if (token !== ACCESS_TOKEN) {
    return jsonOut_({ ok: false, error: "Invalid token" });
  }
  var sheet = getSheet_();
  var values = sheet.getDataRange().getValues();
  var headers = values.shift();
  var rows = values.map(function (row) {
    var obj = {};
    headers.forEach(function (h, i) {
      obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];
    });
    return obj;
  });
  return jsonOut_({ ok: true, rows: rows });
}
