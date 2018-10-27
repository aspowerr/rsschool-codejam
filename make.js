
function make(...args) {
    if (!args.length) return 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let result = args.reduce(reducer);

   return (...innerArgs) => {

        if (innerArgs.length === 0) {
            return result;
        }
         return make(...args, ...innerArgs);   
    }
}


console.log(make(15)(34, 21, 666)(41)());  
