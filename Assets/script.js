var generateBtn = document.querySelector("#generate");

function generatePassword(){
var passwordCharacter=[];
var passwordLength=prompt("How many characters?");
var passwordText="";
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

if (passwordLength < 8 || passwordLength > 128){
  alert ("Please enter a number between 8 and 128");
  return passwordText;
}
var upperCaseQ=confirm("Would you like Uppercase?");
if (upperCaseQ==true){
  passwordCharacter=passwordCharacter.concat(upperCase);
}
var lowerCaseQ=confirm("Would you like Lowercase?");
if (lowerCaseQ==true){
  passwordCharacter=passwordCharacter.concat(lowerCase);
}
var numbersQ=confirm("Would you like numbers?");
if (numbersQ==true){
  passwordCharacter=passwordCharacter.concat(numbers);
}
var symbolsQ=confirm("Would you like Symbols?");
if (symbolsQ==true){
  passwordCharacter=passwordCharacter.concat(symbols);
}
  var hasUpperCaseQ=false;
  var hasLowerCaseQ=false;
  var hasNumberQ=false;
  var hasSymbolQ=false;

  for (let index = 0; index < passwordLength; index++) {
    var character=passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)];
    
    if (upperCaseQ==true && hasUpperCaseQ==false){
      hasUpperCaseQ = upperCase.includes(character);
      if (hasUpperCaseQ==false)  
      {
        character=upperCase[Math.floor(Math.random() * upperCase.length)];
        hasUpperCaseQ=true;
        passwordText+=character;
        continue;
      }
    }
  
    if (upperCaseQ==true && hasUpperCaseQ==false){
      hasUpperCaseQ=upperCase.includes(character);
      if (hasUpperCaseQ==false)  
      {character=upperCase[Math.floor(Math.random() * upperCase.length)];
      hasUpperCaseQ==true;}
        if (hasUpperCaseQ==true){
          continue}}

    if (lowerCaseQ==true && hasLowerCaseQ==false){
      hasLowerCaseQ=lowerCase.includes(character);
      if (hasLowerCaseQ==false) {
        character=lowerCase[Math.floor(Math.random() * lowerCase.length)];
        hasLowerCaseQ = true;
        passwordText+=character;
        continue;
      }
    }
    
    if (numbersQ==true && hasNumberQ==false){
      hasNumberQ=numbers.includes(character);
      if (hasNumberQ==false) {
        character=numbers[Math.floor(Math.random() * numbers.length)];
        hasNumberQ=true;
        passwordText+=character;
        continue;
      }
    }
    
    if (symbolsQ==true && hasSymbolQ==false){
      hasSymbolQ=symbols.includes(character); 
      if (hasSymbolQ==false) {
        character=symbols[Math.floor(Math.random() * symbols.length)];
        hasSymbolQ=true;
        passwordText+=character;
        continue;
      }
    }
  
    passwordText+=character;
  }

  return passwordText;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//needs return
}

generateBtn.addEventListener("click", writePassword);
