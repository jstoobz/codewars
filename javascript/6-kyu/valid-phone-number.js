// Kata Link: https://codewars.com/kata/valid-phone-number

const validPhoneNumber = (phoneNumber) => /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber);

console.log(validPhoneNumber('(123) 456-7890'));