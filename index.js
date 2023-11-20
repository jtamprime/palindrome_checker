function palindrome(str) {
    let stringWithSpaces = str.replace(/[^azA-Z0-9 ]/gi, ' ');
    let stringUpper = stringWithSpaces.toUpperCase();
    let string = stringUpper.split(" ").join("");
    console.log(string);
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }
    console.log(newString);
    if (newString == string) {
    return true;
    }
    return false; 
  }
  