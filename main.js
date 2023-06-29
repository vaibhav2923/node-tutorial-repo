var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200 , {'content-type': 'text/plain'});

    response.end("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nibh orci. Nulla ut pharetra enim. Donec nec hendrerit quam, nec pharetra enim. Etiam vel orci euismod, pulvinar lectus non, consequat erat. Proin a risus lectus. Morbi eleifend orci sed placerat commodo. Morbi congue neque eget velit faucibus mollis. In lacinia mauris sed libero venenatis dictum et non justo. Sed eu ligula eros. Sed condimentum ex eget volutpat imperdiet.or in. Fusce ac volutpat diam, ac bibendum magna. Curabitur eget consequat quam, at tristique nunc. Vestibulum ultrices magna in porttitor ultricies. Praesent vel justo sit amet erat vestibulum scelerisque. Aliquam commodo, mi nec eleifend tempor, odio mauris tincidunt purus, sit amet volutpat nisi erat a odio. Donec varius nisl et odio aliquam, nec finibus sem vulputate. Donec euismod lorem ac facilisis interdum. Duis ac mi eget tortor scelerisque pharetra eu imperdiet nunc. Sed quis aliquam libero. Mauris gravida, nunc id ullamcorper vestibulum, ante nibh accumsan tellus, laoreet malesuada purus risus sit amet orci.");
}).listen(8080);

console.log("Server is running at http://127.0.0.1:8080/");
console.log("Good luck");