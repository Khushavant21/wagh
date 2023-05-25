var express = require("express");
var fs = require('fs');
var app = express();
var http = require('http');
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
// fs.appendFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//     fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//       });
//   });

// var server = app.listen(8081, function(){
//     var port = server.address().port;
//     console.log("Server started at http://localhost:8081", port);
// });
http.createServer(function (req, res) {
    
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080, console.log("Server started at http://localhost:8080"));