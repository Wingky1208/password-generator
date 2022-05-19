// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var number = "0123456789"
var collect = "";


// Write password to the #password input

function expandCollect() {
  alert('welcome to generate your password');

  var passwordLength = prompt('How many characters will your password have?(at least 8 characters and no more than 128 characters)')
  collect.length = passwordLength;

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

  var specialCharacter = window.confirm('Do you want your password include numbers? ')
  if (specialCharacter == true) {
    collect += symbol;
  }

  return collect;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pwset = "";
  var collect = expandCollect();

  for (i = 0; 1 < collect.length; i++) {
    var ramdomCollect = collect[Math.floor(Math.random() * collect.length)];
    pwset += randomCollect;
  }
  document.getElementById("password").innerHTML = pwset;

  return pwset;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
