var fs=require('fs');
var path=require('path');
var pathname=process.argv[2];
var after='.'+process.argv[3];
fs.readdir(pathname,function(err,list){
    list.forEach(function(file){
        if(path.extname(file)===after) {
            console.log(file)
        }
    })
})