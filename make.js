function sum(a, b) {
    return a + b;
}

function make(...args) {
    for(let i = 0; i < args.length; i++){
    if (+args[i] !== args[i]) return 0;
    }

    if (!args.length) return 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let result = args.reduce(reducer);

   return (...innerArgs) => {

         if (+innerArgs[0] !== innerArgs[0]) {
             return result;
         }
          return make(...args, ...innerArgs);   

    }
}


console.log(make(15)(34, 21, 666)(41)(sum));  
console.log(make(1,4,6)(666)(41,8)(sum));  
console.log(make(15)(66)(1)(sum));  
console.log(make(154)(sum));  
console.log(make('hello'));  
