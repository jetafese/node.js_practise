var fs = require('fs');
//var n = undefined;

module.exports = function (callback){
   fs.readdir(process.argv[2], function done(err, list){
      if(err) return console.log(err);
      for(var i = 0; i < list.length; i++){
         if (list[i].includes("."+process.argv[3])){
            n = list[i];
            callback()
         }
      } 
   })
}

