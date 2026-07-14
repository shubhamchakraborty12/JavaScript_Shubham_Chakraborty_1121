function validateEmail(email) {
  // Pattern checks for alphanumeric/special chars, @, domain, and a 2+ letter extension
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Clean trailing/leading spaces with trim() before testing
  return emailRegex.test(email.trim());
}

console.log(validateEmail("user.name+test@domain.co.uk")); // true
console.log(validateEmail("invalid-email@com"));          // false
