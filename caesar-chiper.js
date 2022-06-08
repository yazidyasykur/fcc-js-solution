function rot13(str) {
    str = str.split("");
    console.log("Raw :" + str);
  
    for (let i in str){
      if(str[i].match(/[A-Z]/)){
        str[i] = str[i].charCodeAt(0) - 13;

        if(str[i] < 65){
          str[i] = str[i] + 26 ;
        } 
      str[i] = String.fromCharCode(str[i]);
      }
    }
    str = str.join("");
    return str;
  }
  
  rot13("SERR CVMMN!");