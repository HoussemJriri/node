var fs=require('fs');
var pathfile=process.argv[2];
fs.readFile(pathfile,function(err,data){
    var lines=data.toString().split('\n').length-1
    console.log(lines)
})