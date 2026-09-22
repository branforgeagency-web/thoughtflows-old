import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Admin.css";
import { loadExternalScript } from "./loadExternalScript";
import { SHEET_WEB_APP_URL, SHEET_ACCESS_TOKEN, ADMIN_PASSWORD } from "../config/sheetConfig";

const SESSION_KEY = "tf_admin_authed";
const XLSX_SRC = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
const JSPDF_SRC = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
const AUTOTABLE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js";

const COLUMNS = [
  { key: "Timestamp", label: "Date" },
  { key: "Source", label: "Source" },
  { key: "Name", label: "Name" },
  { key: "Email", label: "Email" },
  { key: "Phone", label: "Phone" },
  { key: "Course", label: "Course" },
  { key: "Location", label: "Location" },
  { key: "Age", label: "Age" },
  { key: "Qualification", label: "Qualification" },
  { key: "Message", label: "Message" },
];

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return String(value);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function isNotConfigured() {
  return !SHEET_WEB_APP_URL || SHEET_WEB_APP_URL.indexOf("PASTE_") === 0;
}

/* ---------------------------- Login gate ---------------------------- */

const AdminLogin = ({ onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch (err) {
        /* ignore storage errors */
      }
      setError("");
      onSuccess();
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="admin-login-wrap">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <h1>Enquiries Admin</h1>
        <p>Sign in to view Contact &amp; Register form submissions.</p>
        {error && <div className="admin-login-error">{error}</div>}
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

/* ---------------------------- Dashboard ---------------------------- */

const AdminDashboard = ({ onLogout }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [exporting, setExporting] = useState(false);

  const fetchRows = useCallback(async () => {
    if (isNotConfigured()) {
      setError(
        "The enquiry sheet isn't connected yet. Deploy the Apps Script and paste its URL + token into src/config/sheetConfig.js."
      );
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const url = `${SHEET_WEB_APP_URL}?token=${encodeURIComponent(SHEET_ACCESS_TOKEN)}`;
      const res = await fetch(url);
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Request failed");
      setRows(json.rows || []);
    } catch (err) {
      setError(
        "Couldn't load enquiries from the sheet. Check that the Apps Script is deployed with access set to \"Anyone\", and that the URL/token in sheetConfig.js are correct."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (sourceFilter !== "All" && row.Source !== sourceFilter) return false;

      if (fromDate || toDate) {
        const t = new Date(row.Timestamp).getTime();
        if (fromDate && t < new Date(fromDate).getTime()) return false;
        if (toDate && t > new Date(toDate).getTime() + 24 * 60 * 60 * 1000 - 1) return false;
      }

      if (!q) return true;
      return COLUMNS.some((c) => String(row[c.key] || "").toLowerCase().includes(q));
    });
  }, [rows, search, sourceFilter, fromDate, toDate]);

  const sources = useMemo(() => {
    const set = new Set(rows.map((r) => r.Source).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [rows]);

  const stats = useMemo(() => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    let thisWeek = 0;
    let thisMonth = 0;
    rows.forEach((r) => {
      const t = new Date(r.Timestamp);
      if (t >= startOfWeek) thisWeek += 1;
      if (t >= startOfMonth) thisMonth += 1;
    });

    return { total: rows.length, thisWeek, thisMonth };
  }, [rows]);

  const exportRowsAsData = () =>
    filteredRows.map((row) => {
      const obj = {};
      COLUMNS.forEach((c) => {
        obj[c.label] = c.key === "Timestamp" ? formatDate(row[c.key]) : row[c.key] || "";
      });
      return obj;
    });

  const handleExportExcel = async () => {
    setExporting(true);
    try {
      await loadExternalScript(XLSX_SRC);
      const XLSX = window.XLSX;
      const ws = XLSX.utils.json_to_sheet(exportRowsAsData());
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Enquiries");
      XLSX.writeFile(wb, `thoughtflows-enquiries-${Date.now()}.xlsx`);
    } catch (err) {
      alert("Could not generate the Excel file. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  const handleExportPdf = async () => {
    setExporting(true);
    try {
      await loadExternalScript(JSPDF_SRC);
      await loadExternalScript(AUTOTABLE_SRC);
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: "landscape" });

      doc.setFontSize(14);
      doc.text("ThoughtFlows - Enquiries Report", 14, 15);
      doc.setFontSize(9);
      doc.text(`Generated: ${new Date().toLocaleString("en-IN")}`, 14, 21);

      const head = [COLUMNS.map((c) => c.label)];
      const body = filteredRows.map((row) =>
        COLUMNS.map((c) => (c.key === "Timestamp" ? formatDate(row[c.key]) : row[c.key] || ""))
      );

      doc.autoTable({
        head,
        body,
        startY: 26,
        styles: { fontSize: 7, cellPadding: 2 },
        headStyles: { fillColor: [9, 125, 138] },
        columnStyles: { 9: { cellWidth: 60 } },
      });

      doc.save(`thoughtflows-enquiries-${Date.now()}.pdf`);
    } catch (err) {
      alert("Could not generate the PDF. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="admin-shell">
      <div className="admin-header">
        <h1>Enquiries Report</h1>
        <div className="admin-header-actions">
          <button className="admin-btn" onClick={fetchRows} disabled={loading}>
            Refresh
          </button>
          <button className="admin-btn" onClick={handleExportExcel} disabled={exporting || !filteredRows.length}>
            Download Excel
          </button>
          <button className="admin-btn" onClick={handleExportPdf} disabled={exporting || !filteredRows.length}>
            Download PDF
          </button>
          <button className="admin-btn admin-btn-primary" onClick={onLogout}>
            Sign out
          </button>
        </div>
      </div>

      <div className="admin-body">
        {error && <div className="admin-error-banner">{error}</div>}

        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="value">{stats.total}</div>
            <div className="label">Total enquiries</div>
          </div>
          <div className="admin-stat-card">
            <div className="value">{stats.thisWeek}</div>
            <div className="label">This week</div>
          </div>
          <div className="admin-stat-card">
            <div className="value">{stats.thisMonth}</div>
            <div className="label">This month</div>
          </div>
        </div>

        <div className="admin-toolbar">
          <input
            type="text"
            placeholder="Search name, email, phone, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s === "All" ? "All sources" : s}
              </option>
            ))}
          </select>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <div className="admin-toolbar-spacer" />
          <span className="admin-toolbar-count">
            {filteredRows.length} of {rows.length} shown
          </span>
        </div>

        <div className="admin-table-wrap">
          {loading ? (
            <div className="admin-loading">Loading enquiries...</div>
          ) : filteredRows.length === 0 ? (
            <div className="admin-empty">No enquiries match your filters yet.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  {COLUMNS.map((c) => (
                    <th key={c.key}>{c.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, i) => (
                  <tr key={i}>
                    <td>{formatDate(row.Timestamp)}</td>
                    <td>
                      <span
                        className={`admin-source-chip ${
                          row.Source === "Register Popup" ? "register" : "contact"
                        }`}
                      >
                        {row.Source}
                      </span>
                    </td>
                    <td>{row.Name}</td>
                    <td>{row.Email}</td>
                    <td>{row.Phone}</td>
                    <td>{row.Course}</td>
                    <td>{row.Location}</td>
                    <td>{row.Age}</td>
                    <td>{row.Qualification}</td>
                    <td>{row.Message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------------------------- Entry point ---------------------------- */

const Admin = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    try {
      setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
    } catch (err) {
      setAuthed(false);
    }
  }, []);

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch (err) {
      /* ignore */
    }
    setAuthed(false);
  };

  if (!authed) {
    return <AdminLogin onSuccess={() => setAuthed(true)} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default Admin;
