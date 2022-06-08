function convertToRoman(num) {
  let romanArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  let numArr = [];
  let roman = [];
  let romanDict = {
    '1':'I',
    '4':'IV',
    '5':'V',
    '9':'IX',
    '10':'X',
    '40':'XL',
    '50':'L',
    '90':'XC',
    '100':'C',
    '400':'CD',
    '500':'D',
    '900':'CM',
    '1000':'M'
  }

   while(num != 0){
     for(let i = romanArray.length-1; i>=0 ; i--){
       while(num >= romanArray[i]){
         if(num%romanArray[i] >= 0){
           numArr.push(romanArray[i]);
           num = num - romanArray[i];
         }
       }
     }
   }

   for(let i in numArr){
     roman.push(romanDict[numArr[i]])
   }

  roman = roman.join('');
  console.log(roman);
  return roman;
}

convertToRoman(10);