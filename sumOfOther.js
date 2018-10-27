function sumOfOther(array) {
    
    let newArray = [];
    let sum = 0; 

    for(let i = 0; i < array.length; i++) {
        if( !(array) ||
            +array[i] !== array[i] ||
            array[i]<0 || array[i]>9) {
            return  [];
        }
    }

    for(let j = 0; j < array.length; j++) {
     sum += array[j];
    }

    for(let i = 0; i < array.length; i++) {
    newArray[i] = sum - array[i];
    }

    return newArray;

  };


  console.log(sumOfOther([2,3,4,1]));
  console.log(sumOfOther([72,85,4,100]));
  console.log(sumOfOther([[], 3, "ddd" , 1]));
  console.log(sumOfOther([]));
  console.log(sumOfOther(["2,3,4,1"]));
  
  