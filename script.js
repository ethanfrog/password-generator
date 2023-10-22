// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function
function generatePassword() {
  console.log("Password generation happens here");
  
  // The amount of characters to generate
  var passwordLength = 0;

  // Prompt user for password length, while ensuring it is within the acceptable range
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter password length (8-128)");
  }

  // The four sets of characters that can be selected
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChars = "0123456789"
  var specialChars = "!?@#$%^&*()-+=<>/"
  // A list of usable characters for password generation, will be added to after prompting
  var usableChars = "";

  // Prompt user for usable characters

  // Split usableChars into a list of individual characters
  var usableCharArray = usableChars.split("");

  // The generated password, to be returned when the function ends
  var password = "";

  // Generate password of specified length
  for (i = 1; i <= passwordLength; i++) {
    // Pull a random character from usableChars
    var randChar = usableCharArray[getRandomIntInclusive(0, usableCharArray.length - 1)]
    // Append to password
    password = password + randChar;
  }

  return password;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}