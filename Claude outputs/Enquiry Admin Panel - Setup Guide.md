# Enquiries Admin Panel — Setup Guide

Your Contact form and the Register popup used to only send an email. They now
also log every submission to a Google Sheet, and the site has a new page at
**yourdomain.com/admin** that shows all of them in a table with search,
filters, and Excel/PDF export.

None of this goes live until you do the one-time setup below (about 5
minutes). Until then, the site works exactly as before — nothing is broken.

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank spreadsheet. Name it something like **"ThoughtFlows Enquiries"**.
2. In the sheet, open **Extensions > Apps Script**.
3. Delete the placeholder code in the editor and paste in the entire
   contents of the attached **Code.gs** file.
4. In that pasted code, find this line near the top:
   ```
   var ACCESS_TOKEN = "PASTE_A_LONG_RANDOM_TOKEN_HERE";
   ```
   Replace the text between the quotes with a long random string — this is
   the "password" that lets your website talk to this sheet. You can
   generate one at [uuidgenerator.net](https://www.uuidgenerator.net/) or
   just mash your keyboard for 30+ characters. Keep it secret.
5. Click **Deploy > New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**. Google will ask you to authorize the script with your
   account — approve it (you'll see a warning screen since it's your own
   unpublished script; click "Advanced" > "Go to (project name)" to proceed).
7. Copy the **Web app URL** it gives you (it ends in `/exec`).

## 2. Connect the website to the sheet

1. Open `src/config/sheetConfig.js` in the website project.
2. Paste the Web app URL from step 1.7 into `SHEET_WEB_APP_URL`.
3. Paste the exact same random token from step 1.4 into `SHEET_ACCESS_TOKEN`.
4. Change `ADMIN_PASSWORD` to whatever password you want to use to log into
   `/admin`. (Note: since this site has no backend server, this password is
   a basic deterrent to keep casual visitors out — not bank-grade security.
   Don't reuse an important password here, and don't put anything more
   sensitive than this enquiry list behind it.)

Save the file, rebuild/redeploy the site, and you're done. New Contact form
and Register popup submissions will now log to the sheet automatically —
the email notifications keep working exactly as before, this just adds a
second, silent copy into the sheet.

## 3. Using the admin panel

Go to `yourdomain.com/admin`, enter the password you set, and you'll see:

- **Stat cards** — total enquiries, this week, this month.
- **Search box** — filters across name, email, phone, course, location and
  message as you type.
- **Source filter** — Contact form vs Register popup.
- **Date range** — filter by submission date.
- **Download Excel** — exports whatever is currently filtered as an .xlsx
  file.
- **Download PDF** — exports the same filtered rows as a formatted PDF
  report.
- **Refresh** — re-fetches the latest rows from the sheet.

You can also just open the Google Sheet directly any time to see the raw
data, sort it, or build your own charts from it.

## Notes / limits

- This is a genuinely free setup — no new paid accounts, uses your existing
  Google account.
- If you ever want to change what the Apps Script does, remember you must
  create a **new deployment** (Deploy > Manage deployments > Edit > New
  version) for the change to actually take effect — editing the code alone
  doesn't update the live URL's behavior.
- If `/admin` shows a "Couldn't load enquiries" error, double check: the
  deployment's access is set to "Anyone", and the URL/token in
  `sheetConfig.js` exactly match what's in the Apps Script.
