// Assignment Code
var generateBtn = document.querySelector("#generate");


// Creating variables for each array of characters for passwrd generation

var Nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbls = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?", "|"];
var UprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creating menu prompts for popups to select which types of chars the user wants

function PasswordPrompts () {

  var PswrdLengths = prompt("Choose length of password");

  while ((PswrdLengths < 8) || (PswrdLengths > 128)) {
    PswrdLengths = prompt ("Password length must be between 8 and 128 Characters");
  }
  var ConfirmNums = confirm ("Do you want to include numbers in your password?"); 
  var ConfirmSymbls = confirm ("Do you want to include symbols in your password?");
  var ConfirmUprCase = confirm ("Do you want to include upper case letters in your password?");
  var ConfirmLwrCase = confirm ("Do you want to include lower case letters in your password?");

  // created an object with keys to be able to return the values to the webpage in order to display popups
  var ConfirmObjects = { 
    
    PswrdLengths: PswrdLengths,
    ConfirmNums: ConfirmNums,
    ConfirmSymbls: ConfirmSymbls,
    ConfirmUprCase: ConfirmUprCase,
    ConfirmLwrCase: ConfirmLwrCase,

  };

  return ConfirmObjects;
}

// Fetching random index and rounds down to equal integer to the correct length of the array
function CreateRandom(length) {

  var RndmNmbr = Math.floor(Math.random() * length);
  return RndmNmbr;

}


// Created function in order to execute Password

function generatePassword() {

  var PswrdGenerate = PasswordPrompts();
  var PswrdArray = [];
  var CharSelect = [];

// if statements created to combine strings together

  if (PswrdGenerate.ConfirmNums) {
    CharSelect = CharSelect.concat(Nums)
  } if (PswrdGenerate.ConfirmSymbls) {
    CharSelect = CharSelect.concat(Symbls)
  } if (PswrdGenerate.ConfirmUprCase) {
    CharSelect = CharSelect.concat(UprCase)
  } if (PswrdGenerate.ConfirmLwrCase) {
    charactCharSelecterSelector = CharSelect.concat(LwrCase)
  }


  for (var i = 0; i < PswrdGenerate.PswrdLengths; i++) {
    PswrdArray.push(CharSelect[CreateRandom(CharSelect.length)])
  }

  return PswrdArray.join("")
  
 

  
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
