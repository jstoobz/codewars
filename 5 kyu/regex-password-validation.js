// Kata Link: https://codewars.com/kata/regex-password-validation

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

let result = validate('Password123');
console.log(result);