var fs = require('fs');
var n = 0;
function solve(callback){
   fs.readFile(process.argv[2], 'utf8', function done(err, fileContents){
   n = fileContents.split("\n").length - 1;
   callback()
   })
}
function log(){
   console.log(n);
}

solve(log);
