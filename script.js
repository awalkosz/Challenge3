// Assignment Code
var generateBtn = document.querySelector("#generate");


// Creating variables for each array of characters for passwrd generation

var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbls = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?", "|"];
var UprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creating menu prompts for pop to select which types of chars the user wants

function PasswordPrompts () {
  var PasswordLengths = prompt ("Choose length of password");
  while ((PasswordLengths < 8) || (PasswordLengths > 128)) {
    PasswordLengths = prompt ("Password length must be between 8 and 128 Characters");
  }
  var ConfirmNums = confirm("Do you want to include numbers in your password?"); 
  var ConfirmSymbls = confirm("Do you want to include symbols in your password?");
  var ConfirmUprCase = confirm("Do you want to include upper case letters in your password?");
  var ConfirmLwrCase = confirm("Do you want to include lower case letters in your password?");

}

// Fetching random index and rounds down to equal integer to the correct length of the array
function CreateRandom(length) {
  var RndmNmbr = math.floor(math.random() * length);
  return RndmNmbr;
}
