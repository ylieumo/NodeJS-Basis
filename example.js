const http = require('http');
//create a server object:
http.createServer(function (req, res) {
    res.write('I am so exited !This is my first example using the http module; let try another module. '); 
    res.end(); 
  }).listen(8081); 

  console.log("Server is running at http://localhost:8081/");