// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    alert('welcome to generate your password');

    var passwordLength = prompt('How many characters will your password have?(at least 8 characters and no more than 128 characters)')
    passwordText.length = passwordLength;

    var num = window.confirm('Do you want your password include numbers?')

    if (num) {
      passwordText = Math.floor(Math.random() * 10)
    }
    else { passwordText = '' }

    var specialCharacter = window.confirm('Do you want your password include numbers? ')
    if (specialCharacter) {
      passwordText +=
    }
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
