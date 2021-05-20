// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var special = [" ", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var characterTypes = [];

function generatePassword(){
  var password = "";
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  console.log(includeLowercase);
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  console.log(includeUppercase);
  var includeNumbers = confirm("Would you like to include numbers?");
  console.log(includeNumbers);
  var includeSpecial = confirm("Would you like to include special characters?");
  console.log(includeSpecial);  
  var passLength = prompt("The length of your password must be between 8 and 128 characters, enter password length:");
  while(passLength.value < 8 || passLength.value > 128){
    alert("Not a valid length");
    passLength = prompt("The length of your password must be between 8 and 128 characters, enter password length:");   
  }
  console.log(passLength); 

  if(includeLowercase){
    characterTypes.push(lowercase);
  }
  console.log(characterTypes);
  if(includeUppercase){
    characterTypes.push(uppercase);
  }
  console.log(characterTypes);

  if(includeNumbers){
    characterTypes.push(numbers);
  }
  console.log(characterTypes);

  if(includeSpecial){
    characterTypes.push(special);
  }
  console.log(characterTypes);


  for (i=0; i<passLength; i++) {
    var type = Math.floor(Math.random() * characterTypes.length);
    console.log(type);
    var index = Math.floor(Math.random() * characterTypes[type].length);
    console.log(index);
    var newValue = characterTypes[type][index];
    password = password.concat(newValue);
    console.log(password); 
  }
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
