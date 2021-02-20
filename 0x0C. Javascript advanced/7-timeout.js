console.log("Start of the execution queue");

    setTimeout(function(){ 
        console.log("Final code block to be console.log(index)t");
    }, 0);
  
for (let index = 1; index <= 100; index++) {
    console.log(index);   
}

console.log("End of the loop printing");