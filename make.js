function sum(a, b) { return (a + b); }
function make(...args) { 
  let i = 0;
  while (i < args.length) {
    if (+args[i] !== args[i]) return 0;
    i += 1;
  }
  if (!args.length) return 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = args.reduce(reducer);
  return (...innerArgs) => {
    if (+innerArgs[0] !== innerArgs[0]) {
      return result; }
    return make(...args, ...innerArgs); 
  }
}
console.log(make(15)(34, 21, 666)(41)(sum));  
console.log(make(1, 4, 6)(666)(41, 8)(sum));  
console.log(make(15)(66)(1)(sum));  
console.log(make(154)(sum));  
console.log(make('hello'));  
