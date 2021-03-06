// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var passwordCharacter=[];
var passwordLength=prompt("How many characters?");
var upperCase=[
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var lowerCase=[
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var numbers=[
  '0','1','2','3','4','5','6','7','8','9'
];
var symbols=[
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];
//determine if password length meets requirements
if (passwordLength < 8 || passwordLength > 128){
  alert ("Please enter a number between 8 and 128");
  return //notperfect
}


var upperCaseQ=confirm("Would you like Uppercase?");
if (upperCaseQ==true){
  passwordCharacter=passwordCharacter.concat(upperCase);
}

var lowerCaseQ=confirm("Would you like Lowercase?");
if (lowerCaseQ==true){
  passwordCharacter=passwordCharacter.concat(lowerCase);
}

var numbersQ = confirm("Would you like numbers?");
if (numbers==true){
  passwordCharacter=passwordCharacter.concat(numbers);
}
var symbolsQ = confirm("Would you like Symbols?");
if (symbolsQ==true){
  passwordCharacter=passwordCharacter.concat(symbols);
}

console.log(passwordCharacter);


//determine lowercase chars
//var lowerCaseQ = confirm("Would you like Lowercase?");
//determine numbers
//var numbersQ = confirm("Would you like Numbers?");
//determine symbols
//var symbolsQ = confirm("Would you like Symbols?");}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//needs return
}

generateBtn.addEventListener("click", writePassword);


//Math.floor(Math.random() * passwordCharacter);  (OPTION) 
