// Utility Functions
//Checking Numbers and Symbols are exist
const hasNumbersAndSymbols = (string) => {
  return /\d/.test(string) || /[!@#$%^&*(),.?":{}|<>]/.test(string);
};
// Check if the password is at least 8 characters long
const isAtLeast8Chars = (password) => {
  return /^.{8,}$/.test(password);
};

// Check if the password contains at least one uppercase letter
const hasUppercase = (password) => {
  return /[A-Z]/.test(password);
};

// Check if the password contains at least one lowercase letter
const hasLowercase = (password) => {
  return /[a-z]/.test(password);
};

// Check if the password contains at least one digit
const hasDigit = (password) => {
  return /\d/.test(password);
};

// Check if the password contains at least one special character
const hasSpecialChar = (password) => {
  return /[!@#$%^&*()_+[\]{};':"\\|,.<>/?~-]/.test(password);
};

//Export Function
//Main Function for checking Name has Numbers

export const validateName = (value) => {
  if (value.length === 0) {
    return "Name is required";
  } else if (hasNumbersAndSymbols(value)) {
    return "Numbers and Symbols is not allowed ";
  } else if (value.length < 3) {
    return "Min 3+ Chars";
  } else {
    return "";
  }
};

export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailPattern.test(email);
  if (email.length === 0) {
    return "Email is required";
  } else if (!isValidEmail) {
    return "Enter a Valid Email";
  } else {
    return "";
  }
};

export const validatePassword = (password) => {
  if (password.length === 0) {
    return "Password is required";
  } else if (!hasUppercase(password)) {
    return "Password must have one Uppercase";
  } else if (!hasLowercase(password)) {
    return "Password must have one Lowercase";
  } else if (!hasDigit(password)) {
    return "Password must have one Digit";
  } else if (!hasSpecialChar(password)) {
    return "Password must have one Special Character";
  } else if (!isAtLeast8Chars(password)) {
    return "Password must have minimum 8 Digit";
  } else {
    return "";
  }
};

export const validateDate = (date) => {
  if (date.length === 0) {
    return "Date is Required";
  } else {
    return "";
  }
};
