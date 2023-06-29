var fs = require("fs");
var data = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var  writerstream = fs.createWriteStream('vaibhav.txt');
writerstream.write(data , 'utf-8');
writerstream.end();

writerstream.on('finish' , function () {
    console.log("Write completed");
});
writerstream.on('error' , function(err){
    console.log(err.stack);
});
console.log("program ended");