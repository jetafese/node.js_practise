var val = process.argv.slice(2);
var sum = 0;
val.forEach((l) => {
   sum += +l;
});
//console.log(process.argv);
console.log(sum);
