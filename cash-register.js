function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  let changeArray = [];
  let cidArray = [];
  let totalCid = 0;
  let result = {
    status:"",
    change:[]
  };
  console.log("Change : " + change);
  let moneyArray = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  let moneyDict = {
    "ONE HUNDRED":100,
    "TWENTY":20,
    "TEN":10,
    "FIVE":5,
    "ONE":1,
    "QUARTER":0.25,
    "DIME":0.1,
    "NICKEL":0.05,
    "PENNY":0.01               
  }

  for(let i = 0; i < cid.length; i++){
    cidArray.push([moneyArray[i],parseInt((cid[i][1]/moneyArray[i]).toFixed(0))])
  }

  for(let i = cidArray.length-1 ; i != -1 ; i--){
   while(change.toFixed(2) >= cidArray[i][0] && cidArray[i][1]!=0){
      change -= cidArray[i][0];
      cidArray[i][1] = cidArray[i][1] - 1; 
      changeArray.push(cidArray[i][0])
    }
  }   


  //console.log(changeArray);
  //console.log(cidArray)
  
  let counts = {};
  changeArray.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  console.log(counts);

  for(let prop in moneyDict){
    counts[prop];
    result.change.push([prop,counts[moneyDict[prop]]]);
  }    
  
  for(let i in cidArray){
    totalCid += cidArray[i][1];
  }
  console.log(totalCid)

  let changeAmount = changeArray.reduce((a,b) => a+b).toFixed(2);
  console.log(changeAmount)
  if(changeAmount < cash-price){
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else if (totalCid == 0){
    result.status = "CLOSED";
  } else {
    result.status = "OPEN";
  }

console.log(result);
return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);