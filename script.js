// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var number = "0123456789"
var collect = "";


// Write password to the #password input

function expandCollect() {
  alert('Welcome to generate your password!');
  var pwset = [];

  var passwordLength = prompt('How many characters will your password have?(at least 8 characters and no more than 128 characters)')
  if (isNaN(passwordLength) == false) {
    collect.length = passwordLength;
    if (passwordLength > 128 || passwordLength < 8) {
      alert("Invalid entry. Please enter any number between 8 and 128");
      return;
    }
  }
  else {
    alert("Invalid entry. Please enter any number between 8-128");
    return;
  }


  var numPassword = window.confirm('Do you want your password include numbers?')
  if (numPassword == true) {
    collect += number;
  }

  var lowerPassword = window.confirm('Do you want your password include lowercase?')
  if (lowerPassword == true) {
    collect += lower;
  }


  var upperPassword = window.confirm('Do you want your password include uppercase?')
  if (upperPassword == true) {
    collect += upper;
  }

  var specialCharacter = window.confirm('Do you want your password include special characters? ')
  if (specialCharacter == true) {
    collect += symbol;
  }

  if (numPassword == false && lowerPassword == false && upperPassword == false && specialCharacter == false) {
    alert("Please select at least oen criteria to continue.");
    return;
  }


  var temp = collect.split("");
  for (i = 0; i < passwordLength; i++) {
    var randomCollect = temp[Math.floor(Math.random() * temp.length)];
    pwset.push(randomCollect);
  }
  return pwset.join("");
}

function writePassword() {
  var password = expandCollect();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
