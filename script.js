// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = confirm("Do you want lower case characters?")
  var upperCase = confirm("Do you want upper case characters?")
  var specialChar = confirm("Do you want special characters?")
  var numberChar = confirm("Do you want numbers?")
  var passwordLength = prompt("Length of password.")

  var lowerCaseLetters ="qwertyuiopasdfghjklzxcvbnm"
  var upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var specialChacraters = "!@#$%^&*()-+"
  var numbers = "1234567890"

  var passwordLetters = ""
  var finalPassword = ""

 if(lowerCase) passwordLetters += lowerCaseLetters;
  
 if(upperCase) passwordLetters += upperCaseLetters;

 if(specialChar) passwordLetters += specialChacraters;

 if(numberChar) passwordLetters += numbers;

 for (let i = 0; i < passwordLength;i++) {
  var randomIndex = Math.floor(Math.random() * passwordLetters.length);
  finalPassword += passwordLetters[randomIndex]
 }
  
 return finalPassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
