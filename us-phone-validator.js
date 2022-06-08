function telephoneCheck(str) {
  const val = str.slice();

  function checkNumLength(num){
    num = num.split("");
    num = num.filter(a => a.match(/\d/))

    return num.length;
  }

  function checkCodeValidity(num){
    if(checkNumLength(num) === 11){
      if(num[0] == 1){
        return true;
      } else {
        return false; 
      }
    } 
    else if(checkNumLength(num) === 10){
      return true;
    } else {
      return false;
    }
  }

  function checkNoAlpha(num){
    if(num.match(/[A-Za-z?]/)){
      return false;
    } else {
      return true;
    }
  }

  function checkDash(num){
    let count = 0;
    for(let i in num){
      if(num[i] == '-'){
        count++
      }
    }
    if(count > 2){
      return false;
    } else {
      return true;
    }
  }

  function checkBracket(num){
    if(num.match(/[\(\)]/)){
      if(num.match(/\(\d\d\d\)/)){
        return true;
    } else {
        return false;
      }
    } else {
      return true;
    }

  }
  
  console.log("Num Length : " + checkNumLength(val));
  console.log("Code Valid : " + checkCodeValidity(val));
  console.log("All Numbers : " + checkNoAlpha(val));
  console.log("Dash Number : " + checkDash(val));
  console.log("Check Bracket : " + checkBracket(val));
  
  if(checkBracket(val) && checkDash(val) && checkNumLength(val) && checkCodeValidity(val) && checkNoAlpha(val)){
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-55-55");