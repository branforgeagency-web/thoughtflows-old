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
//
// Enquiries are split into one tab per month, named like "Oct 2026", with
// the newest month as the first tab. The month uses the script's time zone
// (Project Settings > Time zone - set it to Asia/Kolkata).
// If you have an old single "Enquiries" tab, run splitOldEnquiriesByMonth()
// once from the editor to move its rows into the month tabs.

var LEGACY_SHEET_NAME = "Enquiries";
var ACCESS_TOKEN = "ThoughtFlows@Enquiry2026!SecureKey";

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

function monthName_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "MMM yyyy");
}

// Returns the tab for the given date's month, creating it (as the first
// tab, so the newest month is always on the left) with headers if needed.
function getMonthSheet_(date) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = monthName_(date);
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name, 0);
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
  }
  return sheet;
}

// Every tab that holds enquiries (header row starts with "Timestamp").
function getEnquirySheets_() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .filter(function (sheet) {
      return (
        sheet.getLastRow() > 0 &&
        sheet.getRange(1, 1).getValue() === COLUMNS[0]
      );
    });
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Called by the website whenever someone submits the Contact form or the
// Register popup - appends one row per enquiry to this month's tab.
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.token !== ACCESS_TOKEN) {
      return jsonOut_({ ok: false, error: "Invalid token" });
    }
    var now = new Date();
    var sheet = getMonthSheet_(now);
    sheet.appendRow([
      now,
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

// Called by the website's /admin page to read all enquiries back out,
// combined from every month tab.
function doGet(e) {
  var token = e.parameter.token;
  if (token !== ACCESS_TOKEN) {
    return jsonOut_({ ok: false, error: "Invalid token" });
  }
  var rows = [];
  getEnquirySheets_().forEach(function (sheet) {
    var values = sheet.getDataRange().getValues();
    var headers = values.shift();
    values.forEach(function (row) {
      var obj = {};
      headers.forEach(function (h, i) {
        obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];
      });
      rows.push(obj);
    });
  });
  // Oldest first, same order as the old single-tab sheet.
  rows.sort(function (a, b) {
    return String(a.Timestamp).localeCompare(String(b.Timestamp));
  });
  return jsonOut_({ ok: true, rows: rows });
}

// One-time helper: run this manually from the Apps Script editor (pick it in
// the function dropdown, click Run) to move the rows from the old single
// "Enquiries" tab into month tabs. The old tab is renamed to
// "Enquiries (old)" and its header changed so it isn't counted twice.
function splitOldEnquiriesByMonth() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var old = ss.getSheetByName(LEGACY_SHEET_NAME);
  if (!old) return;
  var values = old.getDataRange().getValues();
  values.shift();
  var byMonth = {};
  values.forEach(function (row) {
    var ts = row[0] instanceof Date ? row[0] : new Date(row[0]);
    if (isNaN(ts.getTime())) return;
    var name = monthName_(ts);
    if (!byMonth[name]) byMonth[name] = { date: ts, rows: [] };
    byMonth[name].rows.push(row.slice(0, COLUMNS.length));
  });
  // Oldest month first, so each new tab inserted at the front leaves the
  // newest month on the left.
  Object.keys(byMonth)
    .sort(function (a, b) {
      return byMonth[a].date - byMonth[b].date;
    })
    .forEach(function (name) {
      var group = byMonth[name];
      var sheet = getMonthSheet_(group.date);
      sheet
        .getRange(sheet.getLastRow() + 1, 1, group.rows.length, COLUMNS.length)
        .setValues(group.rows);
      sheet.sort(1);
    });
  old.setName(LEGACY_SHEET_NAME + " (old)");
  old.getRange(1, 1).setValue("Timestamp (moved to month tabs)");
}
