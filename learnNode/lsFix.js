//var fs = require('fs');
var mymod = require('./module1.js')  
var n = undefined;
/*
function solve(callback){
   fs.readdir(process.argv[2], function done(err, list){
      if(err) return console.log(err);
      for(var i = 0; i < list.length; i++){
         if (list[i].includes("."+process.argv[3])){
            n = list[i];
            callback()
         }
      } 
   })
}*/
function log(){
   console.log(n);
}

mymod(log);
