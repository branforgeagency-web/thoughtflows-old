import { SHEET_WEB_APP_URL, SHEET_ACCESS_TOKEN } from "../config/sheetConfig";

// Fire-and-forget logging of a form submission to the Google Sheet.
// This must never throw or block the caller - if the sheet isn't configured
// yet, or the request fails, the existing EmailJS flow should carry on
// exactly as before.
export function logEnquiry(source, data) {
  try {
    if (!SHEET_WEB_APP_URL || SHEET_WEB_APP_URL.indexOf("PASTE_") === 0) {
      return;
    }
    const payload = {
      token: SHEET_ACCESS_TOKEN,
      source,
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || data.ph || "",
      course: data.course || "",
      location: data.location || "",
      age: data.age || "",
      qualification: data.qualification || "",
      message: data.message || "",
    };

    // mode: "no-cors" + Content-Type: text/plain keeps this a "simple"
    // request so the browser doesn't send a CORS preflight (which Apps
    // Script web apps don't handle). We don't need to read the response.
    fetch(SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  } catch (e) {
    // never let logging break a form submission
  }
}
