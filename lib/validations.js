
export const initialErrors = {
  fullName: { message: "", invalid: true },
  email: { message: "", invalid: true },
  message: { message: "", invalid: true },
};
// File: lib/validations.js

export const validateField = (field, value) => {
  let message = "";
  let invalid = false;

  if (!value.trim()) {
    message = `${field === "fullName" ? "Full Name" : field} is required`;
    invalid = true;
  } else if (
    field === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  ) {
    message = "Enter a valid email address";
    invalid = true;
  }

  return { message, invalid };
};
