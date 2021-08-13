const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/main.html');
});

app.get('/about', function(request, response){
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function(request, response){
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/photoGallery.', function(request, response){
  response.sendFile(__dirname + '/views/photoGallery.html');
});

/*app.get('/styles/main.css', function(request, response){
  response.sendFile(__dirname + '/public/styles/main.css')
  
})*/

app.listen(3000)