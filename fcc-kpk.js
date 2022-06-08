function smallestCommons(arr) {
  let higher = 0;
  let lower = 0;
  let common = [];
  let list = {};

  if(arguments[0][0] > arguments[0][1]){
    higher = arguments[0][0];
    lower = arguments[0][1];
  } else {
    higher = arguments[0][1];
    lower = arguments[0][0];
  }

  for(let i = lower; i <= higher ; i++){
    let grabber = [];
    let num = i;
    while(num != 1){
      for(let j = 2; j <= higher; j++){
        while(num%j == 0){
          num = num / j;
          grabber.push(j);
        }
      }
    } 
    common.push(grabber);
  }

  console.log(common)

for(let num in common){
  let counter = 1;
  for(let i in common[num]){
    if(common[num][i] != common[num][i-1]){
      counter = 1;
      if(list[common[num][i]] <= counter || !list.hasOwnProperty(common[num][i])){
        list[common[num][i]] = counter;
      }
    } else {
      counter++;
      if(list[common[num][i]] <= counter){
        list[common[num][i]] = counter;
      }
      
    }
  }
}
console.log(list);

  let result = 1;
  for(let items in list){
    result *= items ** parseInt(list[items]);
  }
  console.log(result);
  return result;
}

 
smallestCommons([1,13]);