let array =  [9, 3, 9, 3, 9, 7, 9];

function Solution(array){
  let memory = {};
  for (let i = 0; i <array.length;i++){
    if(memory[array[i]] == 0){
      memory[array[i]] = 1;
    } else{
      memory[array[i]] = 0;
    }
  }
  for (var key in memory){
    if(memory[key]== 0){
      return key;
    };
  }
}


Solution(array);
