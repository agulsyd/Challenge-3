// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Define variables with characters//
var letterUp = "QWERTYUIOPASDFGHJKLZXCVBNM"
var letterDown = "qwertyuiopasdfghjklzxcvbnm";
var special = "`~!@#$%^&*()-_=+[{]}\|;:,<.>/?'";
var newpass = "";
var num = "1234567890";
var password = "";


//psw length 8>128
//uppercase, lowercase, numbers, special characters
//2 Step Validate the imput
//3 Generate password based on criteria

//Define the generate Password function//
function generatePassword(){

  //Welcome the user to the site//
  window.alert("Welcome to the PassWord Generator");

  //Ask user for lenght of the password//
  var passLength= window.prompt("Enter number of digits of your password (8-128)");

  //If statement when the password is greater or equal to 8 and lower or equal to 128//
  if(passLength>=8 && passLength <= 128){

    //Prompt the user for lowercase characters
    var passLow = window.confirm("Do you want your password to include lowercase characters?");
    if(passLow){
      newpass = newpass+letterDown
    }
    //Confirm the user of his selection//
    else{
      window.alert("No lowercase characters selected.");
    }
    
    //Prompt the user for uppercase characters//
    var passUp = window.confirm("Do you want your password to include uppercase charcaters?");
    if(passUp){
      newpass = newpass + letterUp
    }

    //Confirm the user of his selection//
    else{
      window.alert("No uppercase characters selected.");
    }

    //Prompt the user for numeric characters//
    var passNum=window.confirm("Do you want your password to include numeric characters?");
    if(passNum){
      newpass = newpass+num
    }

    //Confirm the user of his selection//
    else{
      window.alert("No numbers selected.")
    }

    //Prompt the user for special characters//
    var passSpe=window.confirm("Do you want your password to contain special characters?");
    if (passSpe){
      newpass = newpass+special
    }

    //Confirm the user of his selection//
    else{
      window.alert("No special numbers selected");
    }

    //Make sure that the user chooses at least one condition, run the function again//
    if(!passLow && !passUp && !passNum && !passSpe ){
      window.alert("You need to select at least one option!");
      generatePassword();
    }

    //Hype the user for his password :)
    else{
      window.alert("Click OK for your safe password!")
    }
    
    //Alert the user that he has to choose a number between 8-128//
    }
    else{
      window.alert("Wrong answer, please try again");
      generatePassword();
    }
    console.log(newpass)
    
    //Randomize the string with a for loop//
    for(i=0; i<passLength;i++){
      password += newpass.charAt(Math.floor(Math.random() * newpass.length));
    }

    //Return the password variable//
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