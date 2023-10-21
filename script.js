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
  var passwordLength = 8;

  // Prompt user for password length

  // The four sets of characters that can be selected
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChars = "0123456789"
  var specialChars = "!?@#$%^&*()-+=<>/"
  // A list of usable characters for password generation, will be added to after prompting
  var usableChars = "";

  // Prompt user for usable characters

  // Split usableChars into a list of characters

  // The generated password, to be returned when the function ends
  var password;

  // Generate password of specified length
  for (i = 0; i < passwordLength; i++) {
    // Pull a random character from usableChars
    // Append to password
  }

  password = "Bananarama";
  return password;
}