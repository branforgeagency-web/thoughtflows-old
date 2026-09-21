// Indian mobile number helpers shared by all enquiry forms
export const normalizePhone = (value = "") =>
  String(value)
    .replace(/[\s\-().]/g, "")
    .replace(/^(\+91|91|0)(?=\d{10}$)/, "");

export const isValidPhone = (value) => /^[6-9]\d{9}$/.test(normalizePhone(value));

export const PHONE_ERROR = "Please enter a valid 10-digit mobile number.";
