var express = require('express');
var app = express();

app.get('/' , function(req , res){
    console.log("Got a GET request for homepage");
    res.send("Homepage");
});
app.post('/' , function(req , res){
    console.log("Got a POST request for homepage");
    res.send("IMPOSSIBLE");
});
app.delete('/Del_student' , function(req , res){
    console.log("Got a GET request for delete page");
    res.send("delete page");
});
app.get('/enrolled_student' , function(req , res){
    console.log("Got a GET request for enrollment page");
    res.send("enrollled student");
});
app.get('/ab*cd' , function(req , res){
    console.log("Got a GET request for ab*cd");
    res.send("pattern matched");
});

var server = app.listen(8081);

var host = server.address().address;
var port = server.address().port;
console.log("Example app is running at http://%s:%s" , host,port);
console.log("Open http://127.0.0.1:%s" , port);