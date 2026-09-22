// Configuration for the enquiry logging + admin report feature.
//
// SETUP (see "Enquiry Admin Panel Setup" guide sent alongside this code):
// 1. Create a Google Sheet, open Extensions > Apps Script, paste the provided
//    Code.gs, set ACCESS_TOKEN there to a long random string, deploy as a
//    Web App (Execute as: Me, Who has access: Anyone), and copy the web app URL.
// 2. Paste that URL and the same token below.
// 3. Change ADMIN_PASSWORD to something only your team knows.

export const SHEET_WEB_APP_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

export const SHEET_ACCESS_TOKEN = "PASTE_THE_SAME_TOKEN_YOU_SET_IN_CODE_GS";

// Basic gate for the /admin page. This is a static site with no server, so
// this is a deterrent (keeps casual visitors out), not real security -
// anyone who reads the JS bundle can find this string. Do not use it to
// gate anything more sensitive than this enquiry list, and change it from
// the default before going live.
export const ADMIN_PASSWORD = "thoughtflows@admin";
